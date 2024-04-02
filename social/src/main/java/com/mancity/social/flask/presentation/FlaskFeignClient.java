package com.mancity.social.flask.presentation;

import com.mancity.social.flask.application.request.FlaskTestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

// @FeignClient(value = "flask", url = "http://70.12.130.121:8090")
@FeignClient(value = "flask", url = "http://175.209.203.185:8090")
public interface FlaskFeignClient {

    @PostMapping("/api/flask/track")
    public void callFlask(@RequestBody FlaskTestDto dto);

    @GetMapping("/api/test")
    void test();
}
