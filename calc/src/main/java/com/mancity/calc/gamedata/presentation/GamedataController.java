package com.mancity.calc.gamedata.presentation;

import com.mancity.calc.gamedata.application.GamedataService;
import com.mancity.calc.gamedata.application.dto.request.GamedataRequestDto;
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

    private final GamedataService gamedataService;

    @PostMapping("/gamedata")
    public ResponseEntity<?> getTrackData(@RequestBody GamedataRequestDto dto) {
        gamedataService.putDataIntoAlgorithm(dto);
        return new ResponseEntity<>(HttpStatus.OK);



    }

    @PostMapping("/createHighlights")
    public ResponseEntity<?> createHighlights(@RequestBody CreateHighlightRequestDto dto) {
        gamedataService.createHighlights(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
