package com.mancity.user.game.presentation;


import com.mancity.user.game.application.response.GameMainResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "eureka-client-social", url = "http://j10c201.p.ssafy.io:8082")
public interface GameFeignClient {

    @GetMapping("/api/social/game/main/{id}")
    public List<GameMainResponseDto> findMyGameOver(@PathVariable("id") long id);

}
