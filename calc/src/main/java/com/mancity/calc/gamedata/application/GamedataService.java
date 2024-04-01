package com.mancity.calc.gamedata.application;

import com.mancity.calc.gamedata.algorithm.MainLogic;
import com.mancity.calc.gamedata.application.dto.request.GamedataRequestDto;
import com.mancity.calc.highlight.application.HighlightService;
import com.mancity.calc.highlight.application.dto.request.CreateHighlightRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class GamedataService {

    private final HighlightService highlightService;

    private MainLogic mainLogic;


    public void createHighlights(CreateHighlightRequestDto dto) {
        highlightService.createHighlights(dto.getGameId(), dto.getTime());
    }

    //알고리즘
    public void putDataIntoAlgorithm(GamedataRequestDto dto) {
        mainLogic.getData(dto.getData());




    }


}
