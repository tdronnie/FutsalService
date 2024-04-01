package com.mancity.social.social.presentation;

import com.mancity.social.highlight.application.dto.request.StoreHighlightRequestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "eureka-client-social", url = "http://j10c201.p.ssafy.io:8082")
public interface SocialFeignClient {

    @PostMapping("/api/social/highlight/store")
    public void storeMyHighlight(@RequestBody StoreHighlightRequestDto dto);
}
