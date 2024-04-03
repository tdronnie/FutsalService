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

import com.mancity.calc.gamedata.application.dto.request.GamedataRequestDto;
import com.mancity.calc.gamedata.domain.Data;
import com.mancity.calc.gamedata.domain.Player;
import com.mancity.calc.gamedata.domain.PlayerStat;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
public class MainLogic {

    List<Data> 프레임리스트;

    private int 필드x1 = 0;

    private int 필드x2 = 0;

    private int 이전프레임공x좌표 = 0;
    private int 이전프레임공y좌표 = 0;

    private int 현재프레임공x좌표 = 0;
    private int 현재프레임공y좌표 = 0;
    private double 공소유유효한최대공속도 = 2;
    private int 공소유유효한최대거리 = 7;

    private double minDis = 공소유유효한최대거리; //최소 반경 플레이어 구하기 위한 변수

    private int 현재프레임공소유자id = 0;
    private int 이전공소유자id = 0;

    private int 현재공소유팀 = 0; //0 -> x, 1 -> A, 2 -> B
    private int 이전공소유팀 = 0; //0 -> x, 1 -> A, 2 -> B

    private int 이전패스자id = 0;

    private int 골감지최대프레임수 = 900; //30초 동안 골인지 확인

    private static PlayerStat teamA1 = new PlayerStat();
    private static PlayerStat teamA2 = new PlayerStat();
    private static PlayerStat teamA3 = new PlayerStat();
    private static PlayerStat teamA4 = new PlayerStat();
    private static PlayerStat teamA5 = new PlayerStat();
    private static PlayerStat teamA6 = new PlayerStat();
    private static PlayerStat teamB1 = new PlayerStat();
    private static PlayerStat teamB2 = new PlayerStat();
    private static PlayerStat teamB3 = new PlayerStat();
    private static PlayerStat teamB4 = new PlayerStat();
    private static PlayerStat teamB5 = new PlayerStat();
    private static PlayerStat teamB6 = new PlayerStat();

    private List<PlayerStat> playersA = new ArrayList<>();
    private List<PlayerStat> playersB = new ArrayList<>();

    private List<Integer> highlightTimes = new ArrayList<>();

    public Map<String, List> getDtoToResponseRslt(GamedataRequestDto dto) {
        this.프레임리스트 = dto.getData();
        teamA1.setNickname("guest");
        playersA.add(teamA1);
        playersA.add(teamA2);
        playersA.add(teamA3);
        playersA.add(teamA4);
        playersA.add(teamA5);
        playersA.add(teamA6);
        playersB.add(teamB1);
        playersB.add(teamB2);
        playersB.add(teamB3);
        playersB.add(teamB4);
        playersB.add(teamB5);
        playersB.add(teamB6);

        log.info("초기 설정 된 playersA 리스트 ={}, playersB 리스트 ={}", playersA.size(), playersB.size());
//        start(); //분석 시작
        log.info("teamA4의 pass ={}", teamA4.getPass());
        Map<String, List> map = new HashMap<>();
        map.put("playersA", playersA);
        map.put("playersB", playersB);
        map.put("highlightTimes", highlightTimes);

//        List<List<PlayerStat>> rslt = new ArrayList<>();
//        rslt.add(playersA);
//        rslt.add(playersB);
        return map;
    }

    private void start() {
        Data data = 프레임리스트.get(0);
        이전프레임공x좌표 = data.getBall().getX();
        이전프레임공y좌표 = data.getBall().getY();


        for (int frameN = 1; frameN < 30; frameN++) {

            log.info("---------------------------------------------------------------");
            log.info("frameNum = {}", frameN);

            List<Player> teamA = 프레임리스트.get(frameN).getTeam_A_players();
            List<Player> teamB = 프레임리스트.get(frameN).getTeam_B_players();

            //--------공 소유 여부 판별 시작 ------------

            Data currData = 프레임리스트.get(frameN);
            현재프레임공x좌표 = currData.getBall().getX();
            현재프레임공y좌표 = currData.getBall().getY();
            필드x1 = currData.getField().getX1();
            필드x2 = currData.getField().getX2();

            double 현재공속도 = 거리구하기(필드x1, 필드x2, 이전프레임공x좌표, 이전프레임공y좌표, 현재프레임공x좌표, 현재프레임공y좌표) * 30;

            이전프레임공x좌표 = 현재프레임공x좌표;
            이전프레임공y좌표 = 현재프레임공y좌표;

            log.info("현재 공속도={}", 현재공속도);

            //공 소유 여부 판별, 속도
            if (현재공속도 < 공소유유효한최대공속도) { //일정 속도 이상이면 누군가 공을 소유하고 있지 않다고 봄, 다음 프레임으로 넘어가기

                log.info("공 속도는 일정 미만으로 만족");
                //공 소유 여부 판별, 거리
                // 반경 안에 플레이어 있으면 가장 공과 가까운 플레이어를 공 소유자로 지정, 공소유팀 지정
                if (반경에플레이어가있는지체크및가장가까운플레이어를소유자로지정(currData.getTeam_A_players(), currData.getTeam_B_players())) {

                    //2번째 프레임부터 공 소유 변경 가능
                    if (frameN >= 2) {
                        if (현재프레임공소유자id != 이전공소유자id) { //공 소유자 변경
                            log.info("공 소유가 변경됨");
                            if (이전공소유팀 == 현재공소유팀) { //같은 팀의 플레이어로 소유가 변경
                                log.info("같은 팀으로 공 소유 변경^^^");
                                //패스 받은 팀원이 골 넣을 경우 패스 준 사람 어시스트 업데이트 위한 이전패스자id 저장
                                이전패스자id = 이전공소유자id;

                                //현재 공 소유 플레이어 패스 +1
                                if (현재공소유팀 == 1) { //팀 A인 경우
                                    log.info("teamA 플레이어의 패스 업데이트");
                                    plusStat(현재프레임공소유자id, 1, "pass"); //팀A, 패스
                                } else { //팀 B인 경우
                                    plusStat(현재프레임공소유자id, 2, "pass"); //팀B, 패스
                                }

                            } else if (현재공소유팀 != 0) { //다른 팀의 플레이어로 소유가 변경
                                log.info("다른 팀으로 공 소유 변경ㅠㅠㅠ");
                                이전패스자id = 0; //어시스트 패스 무효화
                                //이전공소유자id의 턴오버 = 현재 공 소유자id의 수비
                                if (현재공소유팀 == 1) {
                                    log.info("{}의 수비, {}의 턴오버", 현재프레임공소유자id, 이전공소유자id);
                                    plusStat(현재프레임공소유자id, 1, "turnOverInDefense");
                                    plusStat(이전공소유자id, 2, "turnOverInOffense");
                                } else {
                                    log.info("{}의 턴오버, {}의 수비", 현재프레임공소유자id, 이전공소유자id);
                                    plusStat(현재프레임공소유자id, 2, "turnOverInOffense");
                                    plusStat(이전공소유자id, 1, "turnOverInDefense");
                                }
                            }
                        } else if (현재프레임공소유자id == 0) { //무소유, 이전프렝림공소유자의 스탯 업데이트!!
                            if (!슛범위안에있니(이전공소유팀, currData)) continue;
                            if (!골대에들어갔니(이전공소유팀, currData)) { //슛 범위에 들어갔지만 골은 아님
                                plusStat(이전공소유자id, 이전공소유팀, "shotOnTarget"); //유효슛 업데이트
                                plusStat(이전공소유자id, 이전공소유팀, "shot"); //슛 업데이트
                                continue; // 다음 프레임으로 넘어가기
                            }

                            //골 판정
                            int 슛한것으로의심되는사람id = 이전공소유자id;
                            int 슛한것으로의심되는사람의팀 = 이전공소유팀;

                            //900프레임 동안 팀A의 플레이어 모두 왼쪽 팀B의 플레이어 모두 오른쪽에 위치하고, 공이 가운데 바운더리에 위치하는 경우 골로 산정
                            //900프레임 돌면서 경기가 재개되는 프레임 먼저 찾아놓은 후 이후에 만약에 골임이 판정되면  그 다음 프레임부터 스탯 업데이트, 만약 900프레임까지 골이 아니라고 하면 이전에 찾아놓았던 재개 프레임부터 스탯 업데이트 진행
                            int goalFrame = frameN;
                            int[] val = 골인지아닌지900프레임만큼계산(frameN, currData); //val[0] -> 공 여부(0, 1), val[1] -> 공이 다시 필드로 들어오는 프레임, val[2] -> 골 이후 중앙부터 경기 재개 프레임
                            if (val[1] == 1) { //골인 경우
                                //개인 득점 업데이트
                                plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, "shotOnTarget"); //유효슛
                                plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, "shot"); //슛
                                plusStat(슛한것으로의심되는사람id, 슛한것으로의심되는사람의팀, "goal"); //골
                                plusStat(이전패스자id, 슛한것으로의심되는사람의팀, "assist"); //이전 패스자 어시스트 업데이트
                                이전패스자id = 0; //이전 패스자 초기화

                                //골장면 하이라이트 위한 골 장면 시간 보내기
                                int time = currData.getFrame_num() / 30;
                                highlightTimes.add(time);

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
            //전체 플레이어 최대속도 갱신
            //전체 플레이어 활동거리 갱신
            for (int i = 0; i < teamA.size(); i++) {
                log.info("A플레이어 아이디 ={}", teamA.get(i).getPlayer_id());
                int 현재x좌표 = 프레임리스트.get(frameN).getTeam_A_players().get(i).getX();
                int 현재y좌표 = 프레임리스트.get(frameN).getTeam_A_players().get(i).getY();

                //frameNum이 1인경우 속도 예외처리
                double speed = 0;
                double move = 0;
                if (frameN != 1) {
                    //조회되지 않는 플레이어 아이디는 스킵
                    int 이전x좌표 = 프레임리스트.get(frameN - 1).getTeam_A_players().get(i).getX();
                    int 이전y좌표 = 프레임리스트.get(frameN - 1).getTeam_A_players().get(i).getY();
                    speed = 거리구하기(필드x1, 필드x2, 이전x좌표, 이전y좌표, 현재x좌표, 현재y좌표) * 30;
                    move = 거리구하기(필드x1, 필드x2, 이전x좌표, 이전y좌표, 현재x좌표, 현재y좌표);
                }
                playersA.get(i).setSpeed((int) Math.max(playersA.get(i).getSpeed(), speed));
                playersA.get(i).setDistanceCovered((int) (playersA.get(i).getDistanceCovered() + move));
            }

            for (int i = 0; i < teamB.size(); i++) {
                log.info("B플레이어 아이디 ={}", teamB.get(i).getPlayer_id());
                int 현재x좌표 = 프레임리스트.get(frameN).getTeam_B_players().get(i).getY();
                int 현재y좌표 = 프레임리스트.get(frameN).getTeam_B_players().get(i).getY();

                //frameNum이 1인경우 속도 예외처리
                double speed = 0;
                double move = 0;
                if (frameN != 1) {
                    int 이전x좌표 = 프레임리스트.get(frameN - 1).getTeam_B_players().get(i).getX();
                    int 이전y좌표 = 프레임리스트.get(frameN - 1).getTeam_B_players().get(i).getY();
                    speed = 거리구하기(필드x1, 필드x2, 이전x좌표, 이전y좌표, 현재x좌표, 현재y좌표) * 30;
                    move = 거리구하기(필드x1, 필드x2, 이전x좌표, 이전y좌표, 현재x좌표, 현재y좌표);
                }
                playersB.get(i).setSpeed((int) Math.max(playersB.get(i).getSpeed(), speed));
                playersB.get(i).setDistanceCovered((int) (playersB.get(i).getDistanceCovered() + move));
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

            double 골대R중앙부터거리 = 거리구하기(필드x1, 필드x2, 현재프레임공x좌표, 현재프레임공y좌표, postRX, postRY);

            if (!isInCircle(골대R중앙부터거리, r)) return false;

        }
        //팀 B인 경우 왼쪽 골대의 슛범위인지
        else if (팀 == 2) {
            //왼쪽 슛범위 판별
            int postLX = frameData.getField().getX1();
            int postLY = frameData.getField().getY2() - frameData.getField().getY1();

            //반원만 고려, 현재 공의 x좌표가 골대 중심의 x좌표보다 큰 경우만
            if (현재프레임공x좌표 < postLX) return false;

            double 골대L중앙부터거리 = 거리구하기(필드x1, 필드x2, 현재프레임공x좌표, 현재프레임공y좌표, postLX, postLY);

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
            if (GoalPostAMinX > ballX || ballX > GoalPostAMaxX || GoalPostAMinY > ballY || ballY > GoalPostAMaxY)
                return false;
        }
        return true;
    }

    private boolean 반경에플레이어가있는지체크및가장가까운플레이어를소유자로지정(List<Player> teamA, List<Player> teamB) {
//        log.info("반경 탐색");
        minDis = 공소유유효한최대거리;
        int[] rsltVal = new int[2];
        int[] val = new int[2];

        for (Player player : teamA) {
            double dis = 거리구하기(필드x1, 필드x2, player.getX(), player.getY(), 현재프레임공x좌표, 현재프레임공y좌표);
//            log.info("거리 ={}", dis);
            val = 원반경안에있으면서공과가장가까운선수(dis, player, 1);
            if (val[0] != 0) {
                rsltVal[0] = val[0];
                rsltVal[1] = 1;
            }

        }

        for (Player player : teamB) {
            double dis = 거리구하기(필드x1, 필드x2, player.getX(), player.getY(), 현재프레임공x좌표, 현재프레임공y좌표);
//            log.info("거리 ={}", dis);
            val = 원반경안에있으면서공과가장가까운선수(dis, player, 2);
            if (val[0] != 0) {
                rsltVal[0] = val[0];
                rsltVal[1] = 2;
            }
        }
        if (rsltVal[0] == 0) return false;
        else {
            이전공소유자id = 현재프레임공소유자id;
            현재프레임공소유자id = rsltVal[0];
            이전공소유팀 = 현재공소유팀;
            현재공소유팀 = rsltVal[1];
            if (이전공소유자id != 현재프레임공소유자id)
                return true;
        }
        return false;

    }

    private int[] 원반경안에있으면서공과가장가까운선수(double dis, Player player, int team) {
        //원 반경 안에 있으면서 minDis보다 작은 경우
        //원의 공식
        int[] val = new int[2];
        if (isInCircle(dis, 공소유유효한최대거리) && minDis > dis) {
            minDis = dis;
            log.info("!!!!더 짧은거리의 플레이어 나온 경우!!!!");
            log.info("플레이어 아이디 ={}", player.getPlayer_id());
            log.info("플레이어 팀 ={}", team);
            val[0] = player.getPlayer_id();
            val[1] = team;
        }
        return val;
    }

    private boolean isInCircle(double dis, int r) {
        return dis - r <= 0;
    }

    public double 거리구하기(int 필드x1, int 필드x2, double x1, double y1, double x2, double y2) {
        double pixelPerMeter = (double) 40 / (필드x2 - 필드x1); //한 픽셀이 몇 미터인지
//        log.info("x1={}", pixelPerMeter);

        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) * pixelPerMeter;
    }


    private void plusStat(int playerId, int team, String stat) {
        if (team == 1) {
            switch (playerId) {
                case 1:
                    log.info("teamA의 1번 플레이어에 저장 ={}", stat);
                    plus(stat, teamA1);
                    break;
                case 2:
                    log.info("teamA의 2번 플레이어에 저장 ={}", stat);
                    plus(stat, teamA2);
                    break;
                case 3:
                    log.info("teamA의 3번 플레이어에 저장 ={}", stat);
                    plus(stat, teamA3);
                    break;
                case 4:
                    log.info("teamA의 4번 플레이어에 저장 ={}", stat);
                    plus(stat, teamA4);
                    break;
                case 5:
                    log.info("teamA의 5번 플레이어에 저장 ={}", stat);
                    plus(stat, teamA5);
                    break;
                case 6:
                    log.info("teamA의 6번 플레이어에 저장 ={}", stat);
                    plus(stat, teamA6);
                    break;
            }
        }

        if (team == 2) {
            switch (playerId) {
                case 1:
                    log.info("teamB의 1번 플레이어에 저장 ={}", stat);
                    plus(stat, teamB1);
                    break;
                case 2:
                    log.info("teamB의 2번 플레이어에 저장 ={}", stat);
                    plus(stat, teamB2);
                    break;
                case 3:
                    log.info("teamB의 3번 플레이어에 저장 ={}", stat);
                    plus(stat, teamB3);
                    break;
                case 4:
                    log.info("teamB의 4번 플레이어에 저장 ={}", stat);
                    plus(stat, teamB4);
                    break;
                case 5:
                    log.info("teamB의 5번 플레이어에 저장 ={}", stat);
                    plus(stat, teamB5);
                    break;
                case 6:
                    log.info("teamB의 6번 플레이어에 저장 ={}", stat);
                    plus(stat, teamB6);
                    break;
            }
        }
    }

    private static void plus(String stat, PlayerStat player) {
        if (stat.equals("speed")) player.setSpeed(player.getSpeed() + 1);
        if (stat.equals("distanceCovered")) player.setDistanceCovered(player.getDistanceCovered() + 1);
        if (stat.equals("pass")) player.setPass(player.getPass() + 1);
        if (stat.equals("shotOnTarget")) player.setShotOnTarget(player.getShotOnTarget() + 1);
        if (stat.equals("shot")) player.setShot(player.getShot() + 1);
        if (stat.equals("goal")) player.setGoal(player.getGoal() + 1);
        if (stat.equals("assist")) player.setAssist(player.getAssist() + 1);
        if (stat.equals("turnOverInOffense")) player.setTurnOverInOffense(player.getTurnOverInOffense() + 1);
        if (stat.equals("turnOverInDefense")) player.setTurnOverInDefense(player.getTurnOverInDefense() + 1);
    }

}
