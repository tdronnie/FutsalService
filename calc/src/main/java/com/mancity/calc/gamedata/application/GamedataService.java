package com.mancity.calc.gamedata.application;

import com.mancity.calc.gamedata.algorithm.MainLogic;
import com.mancity.calc.gamedata.application.dto.request.GamedataRequestDto;
import com.mancity.calc.gamedata.application.dto.response.GamedataResponseDto;
import com.mancity.calc.gamedata.domain.Data;
import com.mancity.calc.gamedata.domain.PlayerStat;
import com.mancity.calc.gamedata.domain.TeamStat;
import com.mancity.calc.gamedata.domain.respository.GamedataRepository;
import com.mancity.calc.highlight.application.HighlightService;
import com.mancity.calc.highlight.application.dto.request.CreateHighlightRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class GamedataService {

    private final HighlightService highlightService;

    private final GamedataRepository gamedataRepository;


    public void createHighlights(CreateHighlightRequestDto dto) {
        highlightService.createHighlights(dto.getGameId(), dto.getTime());
    }

    //알고리즘
    public List<GamedataResponseDto> putDataIntoAlgorithm(GamedataRequestDto dto) {
        MainLogic ml = new MainLogic();
//        List<List<PlayerStat>> rslt = ml.getDtoToResponseRslt(dto);
        Map<String, List> rslt = ml.getDtoToResponseRslt(dto);

        //전술보드 위한 디비 저장
        gamedataRepository.saveAll(dto.getData());

        //하이라이트 저장
        List<Double> highlightTimes = rslt.get("highlightTimes");

        for (double time : highlightTimes) {
            highlightService.createHighlights(dto.getGame_id(), time);
        }


        TeamStat teamStatA = calcTeamRslt(rslt.get("playersA"));
        TeamStat teamStatB = calcTeamRslt(rslt.get("playersB"));

        List<GamedataResponseDto> list = new ArrayList<>();
        GamedataResponseDto gameDto = GamedataResponseDto.builder()
                .gameId(dto.getGame_id())
                .teamA(teamStatA)
                .teamB(teamStatB)
                .teamA_players(rslt.get("playersA"))
                .teamB_players(rslt.get("playersB"))
                .build();
        list.add(gameDto);

        return list;
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
