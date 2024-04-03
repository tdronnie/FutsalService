package com.mancity.calc.gamedata.application;

import com.mancity.calc.gamedata.algorithm.MainLogic;
import com.mancity.calc.gamedata.application.dto.request.GamedataRequestDto;
import com.mancity.calc.gamedata.application.dto.response.GamedataResponseDto;
import com.mancity.calc.gamedata.domain.PlayerStat;
import com.mancity.calc.gamedata.domain.TeamStat;
import com.mancity.calc.highlight.application.HighlightService;
import com.mancity.calc.highlight.application.dto.request.CreateHighlightRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class GamedataService {

    private final HighlightService highlightService;


    public void createHighlights(CreateHighlightRequestDto dto) {
        highlightService.createHighlights(dto.getGameId(), dto.getTime());
    }

    //알고리즘
    public List<GamedataResponseDto> putDataIntoAlgorithm(GamedataRequestDto dto) {
        MainLogic ml = new MainLogic();
        List<List<PlayerStat>> rslt = ml.getDtoToResponseRslt(dto);

        log.info("결과 값 ={}", rslt.get(0));
        log.info("결과 값 ={}", rslt.get(1));

        TeamStat teamStatA = calcTeamRslt(rslt.get(0));
        TeamStat teamStatB = calcTeamRslt(rslt.get(1));

        List<GamedataResponseDto> list = new ArrayList<>();
        GamedataResponseDto gameDto = GamedataResponseDto.builder()
                .gameId(dto.getGame_id())
                .teamA(teamStatA)
                .teamB(teamStatB)
                .teamA_players(rslt.get(0))
                .teamB_players(rslt.get(1))
                .build();
        list.add(gameDto);

        return list;
    }

    public TeamStat calcTeamRslt(List<PlayerStat> playerStats) {

        int sumSpeed = 0;
        int sumDistanceCovered = 0;
        int sumPass = 0;
        int sumShotsOnTarget = 0;
        int sumShot = 0;
        int sumGoal = 0;
        int sumAssist = 0;
        int sumTOOff = 0;
        int sumTODF = 0;

        for (PlayerStat stat : playerStats) {
            sumSpeed += stat.getSpeed();
            sumDistanceCovered += stat.getDistanceCovered();
            sumPass += stat.getPass();
            sumShotsOnTarget += stat.getShotsOnTarget();
            sumShot += stat.getShot();
            sumGoal += stat.getGoal();
            sumAssist += stat.getAssist();
            sumTOOff += stat.getTurnOverInOffense();
            sumTODF += stat.getTurnOverInDefense();
        }
        return TeamStat.builder()
                .speed(sumSpeed)
                .distanceCovered(sumDistanceCovered)
                .pass(sumPass)
                .shotsOnTarget(sumShotsOnTarget)
                .shot(sumShot)
                .goal(sumGoal)
                .assist(sumAssist)
                .turnOverInOffense(sumTOOff)
                .turnOverInDefense(sumTODF)
                .build();

    }


}
