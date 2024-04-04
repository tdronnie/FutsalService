package com.mancity.calc.social.application;

import com.mancity.calc.social.application.dto.request.CreateHighlightRequestDto;
import com.mancity.calc.social.presentation.SocialFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class SocialService {

    private final SocialFeignClient socialFeignClient;

    public void createHighlights(Long gameId, double time) {
        CreateHighlightRequestDto dto = CreateHighlightRequestDto.builder()
                .gameId(gameId)
                .time(time)
                .build();
        socialFeignClient.createHighlights(dto);
    }

}
