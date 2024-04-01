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

    private long 현재프레임공소유자id = 0;
    private long 이전프레임공소유자id = 0;

    private int 현재공소유팀 = 0; //0 -> x, 1 -> A, 2 -> B
    private int 이전공소유팀 = 0; //0 -> x, 1 -> A, 2 -> B

    private List<List<Integer>> result = new ArrayList<>();


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
            if (!반경에플레이어가있는지체크및가장가까운플레이어를소유자로지정(현재프레임공x좌표, 현재프레임공y좌표, currData.getTeamA(), currData.getTeamB())) continue;

            //------ 공 소유 여부 판별 끝 --------

            //3번째 프레임부터 공 소유 변경 가능
            if (frameN >= 3) {
                //공 소유 변경 경우!!!!
                if (현재프레임공소유자id != 이전프레임공소유자id) {
                    
                //같은 팀의 플레이어로 소유가 변경된 경우 패스
                if(이전공소유팀 == 현재공소유팀){
                    if(현재공소유팀 == 1)
                        result.get(3).get(현재프레임공소유자id - 1).;
                }
                //다른 팀의 플레이어로 소유가 변경된 경우 턴오버
                else
                }

            }


        }
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
            if(원반경안에있으면서공과가장가까운선수(minDis, dis, player, 1)) flag = true;

        }

        for (Player player : teamB.getPlayers()) {
            double dis = 거리구하기(player.getX(), player.getY(), 현재프레임공x좌표, 현재프레임공y좌표);
            if(원반경안에있으면서공과가장가까운선수(minDis, dis, player, 2)) flag = true;
        }
        return flag;
    }

    private boolean 원반경안에있으면서공과가장가까운선수(double minDis, double dis, Player player, int team) {
        //원 반경 안에 있으면서 minDis보다 작은 경우
        //원의 공식
        if (isInCircle(dis) && minDis > dis) {
            minDis = dis;
            이전프레임공소유자id = 현재프레임공소유자id; //이전공소유자 업데이트
            현재프레임공소유자id = player.getId(); //현재 공소유자 업데이트
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

}
