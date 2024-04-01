package com.mancity.social.flask.application;

import com.mancity.social.flask.application.request.FlaskTestDto;
import com.mancity.social.flask.presentation.FlaskFeignClient;
import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.repository.GameRepository;
import com.mancity.social.game.exception.NoSuchGameException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class FlaskService {

    private final FlaskFeignClient flaskFeignClient;

    private final GameRepository gameRepository;

    public void callTrackingAsync(long id) {
        log.info("READY TO CALL FLASK ... ");
        CompletableFuture.runAsync(() -> callTracking(id));
    }

    @Async
    public void callTracking(long id){
        Game game = gameRepository.findById(id).orElseThrow(NoSuchGameException::new);
        log.info("FLASK CALL TRACKING ... ");
        flaskFeignClient.callFlask(FlaskTestDto.builder()
                .url(game.getReplayUrl())
                .game_id(game.getId())
                .build());
        log.info("FLACK TRACKING COMPLETE !!! ");
    }

}
