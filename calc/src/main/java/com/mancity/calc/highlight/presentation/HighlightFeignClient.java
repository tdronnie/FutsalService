package com.mancity.calc.highlight.presentation;

import com.mancity.calc.highlight.application.dto.request.CreateHighlightRequestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@FeignClient(name = "eureka-client-social", url="http://j10c201.p.ssafy.io:8082")
public interface HighlightFeignClient {

    @PostMapping("/api/social/highlight/createHighlights")
    public void createHighlights(@RequestBody CreateHighlightRequestDto dto);
}
