package com.mancity.social.flask.presentation;

import com.mancity.social.flask.application.request.FlaskTestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="flask" , url="http://70.12.130.121:5000")
public interface FlaskFeignClient {

    @PostMapping("/api/flask/track")
    public void callFlask(@RequestBody FlaskTestDto dto);
}
