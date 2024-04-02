package com.mancity.calc.gamedata.algorithm;

import com.mancity.calc.gamedata.domain.Data;
import com.mancity.calc.gamedata.domain.Player;
import com.mancity.calc.gamedata.domain.TeamA;
import com.mancity.calc.gamedata.domain.TeamB;

import java.util.ArrayList;
import java.util.List;

public class MainLogic {

    List<Data> 프레임리스트;

    private double 이전프레임공x좌표 = 0;
    private double 이전프레임공y좌표 = 0;

    private double 공소유유효한최대공속도 = 0;
    private double 공소유유효한최대거리 = 0;

    private int 현재프레임공소유자id = 0;
    private int 이전프레임공소유자id = 0;

    private int 현재공소유팀 = 0; //0 -> x, 1 -> A, 2 -> B
    private int 이전공소유팀 = 0; //0 -> x, 1 -> A, 2 -> B

    private int 골감지최대프레임수 = 900; //30초 동안 골인지 확인

    private List<List<List<Integer>>> result = new ArrayList<>();


    public void getData(List<Data> frames) {
        this.프레임리스트 = frames;
        start(); //분석 시작
    }

    private void start() {
        Data data = 프레임리스트.get(0);
        이전프레임공x좌표 = data.getBall().getX();
        이전프레임공y좌표 = data.getBall().getY();


        for (int frameN = 1; frameN < 프레임리스트.size(); frameN++) {

            //--------공 소유 여부 판별 시작 ------------

            Data currData = 프레임리스트.get(frameN);
            double 현재프레임공x좌표 = currData.getBall().getX();
            double 현재프레임공y좌표 = currData.getBall().getY();

            double 현재공속도 = 거리구하기(이전프레임공x좌표, 이전프레임공y좌표, 현재프레임공x좌표, 현재프레임공y좌표) / (1 / 30);

            //공 소유 여부 판별, 속도
            if (현재공속도 >= 공소유유효한최대공속도) continue; //일정 속도 이상이면 누군가 공을 소유하고 있지 않다고 봄, 다음 프레임으로 넘어가기

            //공 소유 여부 판별, 거리
            // 반경 안에 플레이어 있으면 가장 공과 가까운 플레이어를 공 소유자로 지정, 공소유팀 지정
            if (!반경에플레이어가있는지체크및가장가까운플레이어를소유자로지정(현재프레임공x좌표, 현재프레임공y좌표, currData.getTeamA(), currData.getTeamB()))
                continue;

            //------ 공 소유 여부 판별 끝 --------

            //3번째 프레임부터 공 소유 변경 가능
            if (frameN >= 3) {
                //공 소유자 변경 경우!!!!
                if (현재프레임공소유자id != 이전프레임공소유자id) {

                    //같은 팀의 플레이어로 소유가 변경된 경우 패스
                    if (이전공소유팀 == 현재공소유팀) {
                        //현재 공 소유 플레이어 패스 +1
                        if (현재공소유팀 == 1) { //팀 A인 경우
                            plusStat(현재프레임공소유자id, 1, 3); //팀A, 패스
                        } else { //팀 B인 경우
                            plusStat(현재프레임공소유자id, 2, 3); //팀B, 패스
                        }
                    } else if (현재공소유팀 != 0) {
                        //다른 팀의 플레이어로 소유가 변경된 경우 이전공소유자id의 턴오버 = 현재 공 소유자id의 수비
                        if (현재공소유팀 == 1) {
                            plusStat(현재프레임공소유자id, 1, 9);
                            minusStat(이전프레임공소유자id, 2, 8);
                        } else {
                            plusStat(현재프레임공소유자id, 2, 9);
                            minusStat(이전프레임공소유자id, 1, 8);
                        }
                    } else { //무소유, 이전프렝림공소유자의 스탯 업데이트!!
                        if (!슛범위안에있니()) continue;
                        if (!골대에들어갔니()) continue;


                        int 슛한것으로의심되는사람id = 이전프레임공소유자id;
                        int 슛한것으로의심되는사람의팀 = 이전공소유팀;

                        //900프레임 동안 팀A의 플레이어 모두 왼쪽 팀B의 플레이어 모두 오른쪽에 위치하고, 공이 가운데 바운더리에 위치하는 경우 골로 산정
                        //900프레임 돌면서 경기가 재개되는 프레임 먼저 찾아놓은 후 이후에 만약에 골임이 판정되면  그 다음 프레임부터 스탯 업데이트, 만약 900프레임까지 골이 아니라고 하면 이전에 찾아놓았던 재개 프레임부터 스탯 업데이트 진행
                        int[] val = 골인지아닌지900프레임만큼계산(frameN); //val[0] -> 공 여부(0, 1), val[1] -> 골 이후 경기 재개 프레임, val[2] -> 공이 다시 필드로 들어오는 프레임
                        if (val[1] == 1) { //골인 경우
                            //개인 득점 업데이트
                            plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, 4); //유효슛
                            plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, 5); //슛
                            plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, 6); //골

                            // 프레임 양쪽 팀 갈라진 프레임으로 이동
                            frameN = val[1];

                        } else { //골이 아닌 경우
                            //경기 재개 프레임으로 jump
                            frameN = val[0] - 1;
                        }
                    }

                }


            }
        }
    }

    private int[] 골인지아닌지900프레임만큼계산(int frameN) {

        for (int i = frameN; i <= frameN + 골감지최대프레임수; i++) {
            //경기 재개 프레임 찾기

            //양쪽 팀 위치하고 공 가운데에 있는 경우 골로 판정, 그 때 프레임 저장.. 골 이후 경기재개 및 스탯 업데이트 시작 위해서

        }

        return new int[]{1, 2, 3};

    }

    private boolean 슛범위안에있니() {

        return false;
    }

    private boolean 골대에들어갔니() {
        return false;
    }

    private boolean 반경에플레이어가있는지체크및가장가까운플레이어를소유자로지정(double 현재프레임공x좌표, double 현재프레임공y좌표, TeamA teamA, TeamB teamB) {

        //반경 안의 플레이어 발견 경우 공과 가까운 플레이어 찾기 위한 minDis저장
        //(x−h)
        //2
        // +(y−k)
        //2
        // =r
        //2
        boolean flag = false;
        double minDis = 공소유유효한최대거리;
        for (Player player : teamA.getPlayers()) {
            double dis = 거리구하기(player.getX(), player.getY(), 현재프레임공x좌표, 현재프레임공y좌표);
            if (원반경안에있으면서공과가장가까운선수(minDis, dis, player, 1)) flag = true;

        }

        for (Player player : teamB.getPlayers()) {
            double dis = 거리구하기(player.getX(), player.getY(), 현재프레임공x좌표, 현재프레임공y좌표);
            if (원반경안에있으면서공과가장가까운선수(minDis, dis, player, 2)) flag = true;
        }
        return flag;
    }

    private boolean 원반경안에있으면서공과가장가까운선수(double minDis, double dis, Player player, int team) {
        //원 반경 안에 있으면서 minDis보다 작은 경우
        //원의 공식
        if (isInCircle(dis) && minDis > dis) {
            minDis = dis;
            이전프레임공소유자id = 현재프레임공소유자id; //이전공소유자 업데이트
            현재프레임공소유자id = player.getPlayerId(); //현재 공소유자 업데이트
            //공소유자가 어느팀인지
            이전공소유팀 = 현재공소유팀;
            현재공소유팀 = team;
            return true;
        }
        return false;
    }

    private boolean isInCircle(double dis) {
        return dis - 공소유유효한최대거리 <= 0;
    }

    public double 거리구하기(double 이전프레임공x좌표, double 이전프레임공y좌표, double 현재프레임공x좌표, double 현재프레임공y좌표) {
        //거리/시간
        return Math.sqrt(Math.pow(현재프레임공x좌표 - 이전프레임공x좌표, 2) + Math.pow(현재프레임공y좌표 - 이전프레임공y좌표, 2));
    }


    private void minusStat(int playerId, int team, int statIdx) {
        if (team == 1) {
            List<Integer> playerStat = result.get(3).get(playerId - 1);
            int stat = playerStat.get(statIdx);
            playerStat.set(statIdx, stat - 1);
        } else {
            List<Integer> playerStat = result.get(4).get(playerId - 1);
            int stat = playerStat.get(statIdx);
            playerStat.set(statIdx, stat - 1);
        }
    }

    private void plusStat(int playerId, int team, int statIdx) {
        if (team == 1) {
            List<Integer> playerStat = result.get(3).get(playerId - 1);
            int stat = playerStat.get(statIdx);
            playerStat.set(statIdx, stat + 1);
        } else {
            List<Integer> playerStat = result.get(4).get(playerId - 1);
            int stat = playerStat.get(statIdx);
            playerStat.set(statIdx, stat + 1);
        }
    }
}
