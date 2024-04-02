/*
플레이어 response 구조
"playersA" : [
        {
            "nickname" : "guest",
            "speed" : 35,
            "distanceCovered" : 156,
            "pass" : 33,
            "shotsOnTarget" : 43,
            "shot" : 12,
            "goal" : 1,
            "assist" : 2,
            "turnOverInOffense" : 2, //턴오버
            "turnOverInDefense" : 1 //수비
        },
 */

package com.mancity.calc.gamedata.algorithm;

import com.mancity.calc.gamedata.domain.Data;
import com.mancity.calc.gamedata.domain.Player;

import java.util.ArrayList;
import java.util.List;

public class MainLogic {

    List<Data> 프레임리스트;

    private int 이전프레임공x좌표 = 0;
    private int 이전프레임공y좌표 = 0;

    private int 현재프레임공x좌표 = 0;
    private int 현재프레임공y좌표 = 0;
    private double 공소유유효한최대공속도 = 0;
    private int 공소유유효한최대거리 = 0;

    private int 현재프레임공소유자id = 0;
    private int 이전프레임공소유자id = 0;

    private int 현재공소유팀 = 0; //0 -> x, 1 -> A, 2 -> B
    private int 이전공소유팀 = 0; //0 -> x, 1 -> A, 2 -> B

    private int 이전패스자id = 0;

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

            List<Player> teamA = 프레임리스트.get(frameN).getTeam_A_players();
            List<Player> teamB = 프레임리스트.get(frameN).getTeam_B_players();
            //프레임마다 모든 플레이어의 최대속도 갱신

            //프레임마다 모든 플레이어의 활동량 업데이트

            //--------공 소유 여부 판별 시작 ------------

            Data currData = 프레임리스트.get(frameN);
            현재프레임공x좌표 = currData.getBall().getX();
            현재프레임공y좌표 = currData.getBall().getY();

            double 현재공속도 = 거리구하기(이전프레임공x좌표, 이전프레임공y좌표, 현재프레임공x좌표, 현재프레임공y좌표) / (1 / 30);

            //공 소유 여부 판별, 속도
            if (현재공속도 >= 공소유유효한최대공속도) continue; //일정 속도 이상이면 누군가 공을 소유하고 있지 않다고 봄, 다음 프레임으로 넘어가기

            //공 소유 여부 판별, 거리
            // 반경 안에 플레이어 있으면 가장 공과 가까운 플레이어를 공 소유자로 지정, 공소유팀 지정
            if (!반경에플레이어가있는지체크및가장가까운플레이어를소유자로지정(현재프레임공x좌표, 현재프레임공y좌표, currData.getTeam_A_players(), currData.getTeam_B_players()))
                continue;

            //------ 공 소유 여부 판별 끝 --------

            //3번째 프레임부터 공 소유 변경 가능
            if (frameN >= 3) {
                if (현재프레임공소유자id != 이전프레임공소유자id) { //공 소유자 변경

                    if (이전공소유팀 == 현재공소유팀) { //같은 팀의 플레이어로 소유가 변경
                        //패스 받은 팀원이 골 넣을 경우 패스 준 사람 어시스트 업데이트 위한 이전패스자id 저장
                        이전패스자id = 이전프레임공소유자id;
                        
                        //현재 공 소유 플레이어 패스 +1
                        if (현재공소유팀 == 1) { //팀 A인 경우
                            plusStat(현재프레임공소유자id, 1, 3); //팀A, 패스
                        } else { //팀 B인 경우
                            plusStat(현재프레임공소유자id, 2, 3); //팀B, 패스
                        }
                        
                    } else if (현재공소유팀 != 0) { //다른 팀의 플레이어로 소유가 변경
                        이전패스자id = 0; //어시스트 패스 무효화
                        //이전공소유자id의 턴오버 = 현재 공 소유자id의 수비
                        if (현재공소유팀 == 1) {
                            plusStat(현재프레임공소유자id, 1, 9);
                            minusStat(이전프레임공소유자id, 2, 8);
                        } else {
                            plusStat(현재프레임공소유자id, 2, 9);
                            minusStat(이전프레임공소유자id, 1, 8);
                        }
                    } else { //무소유, 이전프렝림공소유자의 스탯 업데이트!!
                        if (!슛범위안에있니(이전공소유팀, currData)) continue;
                        if (!골대에들어갔니(이전공소유팀, currData)) { //슛 범위에 들어갔지만 골은 아님
                            plusStat(이전프레임공소유자id, 이전공소유팀, 4); //유효슛 업데이트
                            plusStat(이전프레임공소유자id, 이전공소유팀, 5); //슛 업데이트
                            continue; // 다음 프레임으로 넘어가기
                        }

                        //골 판정
                        int 슛한것으로의심되는사람id = 이전프레임공소유자id;
                        int 슛한것으로의심되는사람의팀 = 이전공소유팀;

                        //900프레임 동안 팀A의 플레이어 모두 왼쪽 팀B의 플레이어 모두 오른쪽에 위치하고, 공이 가운데 바운더리에 위치하는 경우 골로 산정
                        //900프레임 돌면서 경기가 재개되는 프레임 먼저 찾아놓은 후 이후에 만약에 골임이 판정되면  그 다음 프레임부터 스탯 업데이트, 만약 900프레임까지 골이 아니라고 하면 이전에 찾아놓았던 재개 프레임부터 스탯 업데이트 진행
                        int[] val = 골인지아닌지900프레임만큼계산(frameN, currData); //val[0] -> 공 여부(0, 1), val[1] -> 공이 다시 필드로 들어오는 프레임, val[2] -> 골 이후 중앙부터 경기 재개 프레임
                        if (val[1] == 1) { //골인 경우
                            //개인 득점 업데이트
                            plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, 4); //유효슛
                            plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, 5); //슛
                            plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, 6); //골
                            plusStat(이전패스자id, 슛한것으로의심되는사람의팀, 7); //이전 패스자 어시스트 업데이트
                            이전패스자id = 0; //이전 패스자 초기화
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

    private int[] 골인지아닌지900프레임만큼계산(int frameN, Data frameData) {

        int[] rslt = new int[3];
        
        //골 장면 계산 시 900프레임 후가 프레임리스트를 벗어나는 경우 프레임리스트 끝까지만 탐색
        int len = Math.min(frameN + 골감지최대프레임수, 프레임리스트.size());

        for (int i = frameN; i < len; i++) {

            //경기 재개 프레임 찾기
            int minY = frameData.getField().getY1();
            int maxY = frameData.getField().getY2();
            int minX = frameData.getField().getX1();
            int maxX = frameData.getField().getX2();
            int ballX = frameData.getBall().getX();
            int ballY = frameData.getBall().getY();
            //공이 필드 내로 들어온 경우
            if (minY <= ballY && ballY <= maxY && minX >= ballX && ballX <= maxX) {
                rslt[1] = i;
            }
            //양쪽 팀 위치하고 공 가운데에 있는 경우 골로 판정, 그 때 프레임 저장.. 골 이후 경기재개 및 스탯 업데이트 시작 위해서
            else if (경기재시작여부체크(frameData)) {
                rslt[2] = i; //경기재개 프레임 저장
                return rslt; //골 이후부터 재개하도록 리턴
            }
        }
        return rslt;

    }

    private boolean 경기재시작여부체크(Data frameData) {

        int minY = frameData.getField().getY1();
        int maxY = frameData.getField().getY2();
        int minX = frameData.getField().getX1();
        int maxX = frameData.getField().getX2();
        int midX = (minX + maxX) / 2;
        int midY = (minY + maxY) / 2;
        int ballX = frameData.getBall().getX();
        int ballY = frameData.getBall().getY();

        List<Player> teamA = frameData.getTeam_A_players();

        //팀 A가 모두 필드 중앙 기준 왼쪽에 위치하지 않는 플레이어 한명이라도 있다면 false
        for (Player p : teamA) {
            if (minX > p.getX() || p.getX() > midX + 100 || minY > p.getY() || p.getY() > maxY) return false;

        }
        //팀 A가 모두 필드 중앙 기준 왼쪽에 위치하지 않는 플레이어 한명이라도 있다면 false
        List<Player> teamB = frameData.getTeam_B_players();
        for (Player p : teamB) {
            if (midX - 100 > p.getX() || p.getX() > maxX || minY > p.getY() || p.getY() > maxY) return false;
        }
        //공이 중앙에 있는지
        if (midX - 50 > ballX || midX + 50 < ballX || midY - 50 > ballY || midY + 50 < ballY) return false;
        return true;
    }

    private boolean 슛범위안에있니(int 팀, Data frameData) {
        //팀 A인 경우 오른쪽 골대의 슛범위인지
        int r = (frameData.getField().getY2() - frameData.getField().getY1()) / 2;
        if (팀 == 1) {
            //오른쪽 슛범위 판별
            //goalpost 중앙 좌표
            int postRX = frameData.getField().getX2();
            int postRY = frameData.getField().getY2() - frameData.getField().getY1();

            //반원만 고려, 현재 공의 x좌표가 골대 중심의 x좌표보다 작은 경우만
            if (현재프레임공x좌표 > postRX) return false;

            double 골대R중앙부터거리 = 거리구하기(현재프레임공x좌표, 현재프레임공y좌표, postRX, postRY);

            if (!isInCircle(골대R중앙부터거리, r)) return false;

        }
        //팀 B인 경우 왼쪽 골대의 슛범위인지
        else if (팀 == 2) {
            //왼쪽 슛범위 판별
            int postLX = frameData.getField().getX1();
            int postLY = frameData.getField().getY2() - frameData.getField().getY1();

            //반원만 고려, 현재 공의 x좌표가 골대 중심의 x좌표보다 큰 경우만
            if (현재프레임공x좌표 < postLX) return false;

            double 골대L중앙부터거리 = 거리구하기(현재프레임공x좌표, 현재프레임공y좌표, postLX, postLY);

            if (!isInCircle(골대L중앙부터거리, r)) return false;
        }
        return true;
    }

    private boolean 골대에들어갔니(int 팀, Data frameData) {

        int ballX = frameData.getBall().getX();
        int ballY = frameData.getBall().getY();
        int GoalPostBMinX = frameData.getTeam_B_goal_post().getX1();
        int GoalPostBMaxX = frameData.getTeam_B_goal_post().getX2();
        int GoalPostBMinY = frameData.getTeam_B_goal_post().getY1();
        int GoalPostBMaxY = frameData.getTeam_B_goal_post().getY2();
        if (팀 == 1) {
            if (GoalPostBMinX > ballX || ballX > GoalPostBMaxX || GoalPostBMinY > ballY || ballY > GoalPostBMaxY)
                return false;
            return true;
        }

        int GoalPostAMinX = frameData.getTeam_A_goal_post().getX1();
        int GoalPostAMaxX = frameData.getTeam_A_goal_post().getX2();
        int GoalPostAMinY = frameData.getTeam_A_goal_post().getY1();
        int GoalPostAMaxY = frameData.getTeam_A_goal_post().getY2();

        if (팀 == 2) {
            if(GoalPostAMinX > ballX || ballX > GoalPostAMaxX || GoalPostAMinY > ballY || ballY > GoalPostAMaxY)
                return false;
        }
        return true;
    }

    private boolean 반경에플레이어가있는지체크및가장가까운플레이어를소유자로지정(double 현재프레임공x좌표, double 현재프레임공y좌표, List<Player> teamA, List<Player> teamB) {

        //반경 안의 플레이어 발견 경우 공과 가까운 플레이어 찾기 위한 minDis저장
        //(x−h)
        //2
        // +(y−k)
        //2
        // =r
        //2
        boolean flag = false;
        double minDis = 공소유유효한최대거리;
        for (Player player : teamA) {
            double dis = 거리구하기(player.getX(), player.getY(), 현재프레임공x좌표, 현재프레임공y좌표);
            if (원반경안에있으면서공과가장가까운선수(minDis, dis, player, 1)) flag = true;

        }

        for (Player player : teamB) {
            double dis = 거리구하기(player.getX(), player.getY(), 현재프레임공x좌표, 현재프레임공y좌표);
            if (원반경안에있으면서공과가장가까운선수(minDis, dis, player, 2)) flag = true;
        }
        return flag;
    }

    private boolean 원반경안에있으면서공과가장가까운선수(double minDis, double dis, Player player, int team) {
        //원 반경 안에 있으면서 minDis보다 작은 경우
        //원의 공식
        if (isInCircle(dis, 공소유유효한최대거리) && minDis > dis) {
            minDis = dis;
            이전프레임공소유자id = 현재프레임공소유자id; //이전공소유자 업데이트
            현재프레임공소유자id = player.getPlayer_id(); //현재 공소유자 업데이트
            //공소유자가 어느팀인지
            이전공소유팀 = 현재공소유팀;
            현재공소유팀 = team;
            return true;
        }
        return false;
    }

    private boolean isInCircle(double dis, int r) {
        return dis - r <= 0;
    }

    public double 거리구하기(double x1, double y1, double x2, double y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
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
