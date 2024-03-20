package com.mancity.social.game.presentation;

import com.mancity.social.game.application.dto.request.UserPlusRequestDto;
import com.mancity.social.game.application.dto.response.UserResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "eureka-client-user")
public interface UserFeignClient {

    @GetMapping("/user/{id}")
    public UserResponseDto findById(@PathVariable("id") Long id);

    @PostMapping("/stat/plus")
    public void plus(@RequestBody UserPlusRequestDto dto);

}
