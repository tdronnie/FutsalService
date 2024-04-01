package com.mancity.calc.gamedata.presentation;

import com.mancity.calc.gamedata.application.GameDataService;
import com.mancity.calc.highlight.application.dto.request.CreateHighlightRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/calc")
public class GamedataController {

    private final GameDataService gameDataService;

//    @PostMapping("/track")
//    public GamedataResponseDto getTrackData(@RequestBody Long gameId) {
//
//        ///플라스크 트래킨 데이터 호출
//
//
//    }

    @PostMapping("/createHighlights")
    public ResponseEntity<?> createHighlights(@RequestBody CreateHighlightRequestDto dto) {
        gameDataService.createHighlights(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
