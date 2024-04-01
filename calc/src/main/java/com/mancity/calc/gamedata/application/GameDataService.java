package com.mancity.calc.gamedata.application;

import com.mancity.calc.highlight.application.HighlightService;
import com.mancity.calc.highlight.application.dto.request.CreateHighlightRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class GameDataService {

    private final HighlightService highlightService;

    public void createHighlights(CreateHighlightRequestDto dto) {
        highlightService.createHighlights(dto.getGameId(), dto.getTime());
    }


}
