package com.mancity.calc.game.presentation;

import com.mancity.calc.gamedata.application.dto.response.GamedataResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "eureka-client-social", url = "http://j10c201.p.ssafy.io:8082")
public interface GameFeignClient {

    @PostMapping("http://localhost:8082/api/social/game/input")
    public void inputDataFromCalc(@RequestBody GamedataResponseDto dto);
}
