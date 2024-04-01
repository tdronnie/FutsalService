package com.mancity.calc.highlight.application;

import com.mancity.calc.highlight.application.dto.request.CreateHighlightRequestDto;
import com.mancity.calc.highlight.presentation.HighlightFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class HighlightService {

    private final HighlightFeignClient highlightFeignClient;

    public void createHighlights(Long gameId, String time) {
        CreateHighlightRequestDto dto = CreateHighlightRequestDto.builder()
                .gameId(gameId)
                .time(time)
                .build();
        highlightFeignClient.createHighlights(dto);
    }

}
