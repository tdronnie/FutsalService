package com.mancity.calc.social.presentation;

import com.mancity.calc.gamedata.application.dto.response.GamedataResponseDto;
import com.mancity.calc.social.application.dto.request.CreateHighlightRequestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@FeignClient(name = "eureka-client-social", url="http://j10c201.p.ssafy.io:8082")
public interface SocialFeignClient {

    @PostMapping("/api/social/highlight/createHighlights")
    public void createHighlights(@RequestBody CreateHighlightRequestDto dto);

    @PostMapping("/api/social/game/input")
    public void inputDataFromCalc(@RequestBody GamedataResponseDto dto);
}
