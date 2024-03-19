package com.mancity.social.match.presentation;

import com.mancity.social.match.application.dto.response.UserResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="eureka-client-user")
public interface UserFeignClient {

    @GetMapping("/user/{id}")
    public UserResponseDto findById(@PathVariable("id") Long id);

}
