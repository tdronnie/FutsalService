package com.mancity.calc.highlight.application;

import com.mancity.calc.highlight.application.dto.request.CreateHighlightRequestDto;
import com.mancity.calc.highlight.presentation.HighlightFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class HighlightService {

    private final HighlightFeignClient highlightFeignClient;

    public void createHighlights(Long gameId, String time) {

        highlightFeignClient.createHighlights(CreateHighlightRequestDto.builder()
                .gameId(gameId)
                .time(time)
                .build());

    }


}
