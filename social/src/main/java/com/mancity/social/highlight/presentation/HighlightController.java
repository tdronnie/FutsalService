package com.mancity.social.highlight.presentation;

import com.mancity.social.highlight.application.HighlightService;
import com.mancity.social.highlight.application.dto.request.CreateHighlightRequestDto;
import com.mancity.social.highlight.application.dto.request.StoreHighlightRequestDto;
import com.mancity.social.highlight.application.dto.response.HighlightResponseDto;
import com.mancity.social.highlight.application.dto.response.MyhighlightResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/social/highlight")
public class HighlightController {

    private final HighlightService highlightService;

    @PostMapping("/createHighlights")
    @Operation(summary = "경기에서 하이라이트 생성 API", description = "경기 분석 중 골 넣었을 때 경기 하이라이트 생성되는 API")
    public ResponseEntity<?> createHighlights(@RequestBody CreateHighlightRequestDto dto) {
        highlightService.createHighlights(dto);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @GetMapping("/{game}")
    @Operation(summary = "하이라이트 조회 API", description = "경기 분석 후 생성된 하이라이트 조회 API")
    public ResponseEntity<List<HighlightResponseDto>> getGameHighlights(@PathVariable("game") Long id) {
        return new ResponseEntity<>(highlightService.getGameHighlights(id), HttpStatus.OK);
    }


    @PostMapping("/store")
    @Operation(summary = "나의 하이라이트 저장 API", description = "경기 분석 후 생성된 하이라이트를 유저의 나의 하이라이트로 저장하는 API")
    public ResponseEntity<?> storeMyHighlight(@RequestBody StoreHighlightRequestDto dto) {
        highlightService.storeMyHighlight(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{user}")
    public ResponseEntity<List<MyhighlightResponseDto>> getMyHighlights(@PathVariable("user") Long id) {
        return new ResponseEntity<>(highlightService.getMyHighlights(id), HttpStatus.OK);
    }


}
