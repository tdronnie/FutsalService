package com.mancity.social.user.presentation;

import com.mancity.social.user.application.dto.request.AlarmCreateDto;
import com.mancity.social.user.application.dto.request.UserPlusRequestDto;
import com.mancity.social.user.application.dto.response.UserResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "eureka-client-user", url="http://j10c201.p.ssafy.io:8081")
public interface UserFeignClient {

    @GetMapping("/api/user/{id}")
    public UserResponseDto findById(@PathVariable("id") Long id);

    @PostMapping("/api/user/stat/plus")
    public void plus(@RequestBody UserPlusRequestDto dto);

    @PostMapping("/api/user/alarm/create")
    public void alarm(@RequestBody AlarmCreateDto dto);

}
