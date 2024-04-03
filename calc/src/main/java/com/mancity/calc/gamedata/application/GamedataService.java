package com.mancity.calc.gamedata.application;

import com.mancity.calc.gamedata.algorithm.MainLogic;
import com.mancity.calc.gamedata.application.dto.request.GamedataRequestDto;
import com.mancity.calc.gamedata.application.dto.response.GamedataResponseDto;
import com.mancity.calc.gamedata.domain.PlayerStat;
import com.mancity.calc.gamedata.domain.TeamStat;
import com.mancity.calc.gamedata.domain.respository.GamedataRepository;
import com.mancity.calc.social.application.SocialService;
import com.mancity.calc.social.application.dto.request.CreateHighlightRequestDto;
import com.mancity.calc.social.presentation.SocialFeignClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class GamedataService {

    private final SocialService socialService;

    private final SocialFeignClient socialFeignClient;

    private final GamedataRepository gamedataRepository;


    public void createHighlights(CreateHighlightRequestDto dto) {
        socialService.createHighlights(dto.getGameId(), dto.getTime());
    }

    //알고리즘
    public void putDataIntoAlgorithm(GamedataRequestDto dto) {
//        MainLogic ml = new MainLogic();
//        Map<String, List> rslt = ml.getDtoToResponseRslt(dto);
//
//        List<PlayerStat> playersA = rslt.get("playersA");
//        List<PlayerStat> playersB = rslt.get("playersB");
//        List<Integer> highlightTimes = rslt.get("highlightTimes"); //하이라이트 저장
//
//        TeamStat teamStatA = calcTeamRslt(playersA);
//        TeamStat teamStatB = calcTeamRslt(playersB);
//        //전술보드 위한 디비 저장
//        gamedataRepository.saveAll(dto.getData());
//
//        for (int time : highlightTimes) {
//            socialService.createHighlights(dto.getGame_id(), time);
//        }
//
//        GamedataResponseDto gameDto = GamedataResponseDto.builder()
//                .gameId(dto.getGame_id())
//                .teamA(teamStatA)
//                .teamB(teamStatB)
//                .teamA_players(playersA)
//                .teamB_players(playersB)
//                .build();

//        socialFeignClient.inputDataFromCalc(gameDto); //social로 분석 완료 데이터 전달
    }

    public TeamStat calcTeamRslt(List<PlayerStat> playerStats) {

        int sumPass = 0;
        int sumShotOnTarget = 0;
        int sumShot = 0;
        int sumGoal = 0;

        for (PlayerStat stat : playerStats) {
            sumPass += stat.getPass();
            sumShot += stat.getShot();
            sumGoal += stat.getGoal();
            sumShotOnTarget += stat.getShotOnTarget();
        }
        return TeamStat.builder()
                .pass(sumPass)
                .shotOnTarget(sumShotOnTarget)
                .shot(sumShot)
                .goal(sumGoal)
                .build();

    }


}
