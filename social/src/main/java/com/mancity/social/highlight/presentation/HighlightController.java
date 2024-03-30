package com.mancity.social.highlight.presentation;

import com.mancity.social.highlight.application.HighlightService;
import com.mancity.social.highlight.application.dto.response.HighlightReponseDto;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class HighlightController {

    private final HighlightService highlightService;


    @GetMapping("/highlights{game}")
    @Operation(summary = "하이라이트 조회 API", description = "경기 분석 후 생성된 하이라이트 조회 API")
    public ResponseEntity<List<HighlightReponseDto>> getGameHighlights(@PathVariable("game") Long id) {
        return new ResponseEntity<>(highlightService.getGameHighlights(id), HttpStatus.OK);
    }
}
