package com.mancity.social.game.application.dto.response;

import com.mancity.social.game.domain.Game;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameMainResponseDto {

    private long id;

    private long courtId;

    private LocalDate startDate;

    private int time;

    private String replayUrl;

    private String boxImageUrl;

    public static GameMainResponseDto from(Game game) {
        return GameMainResponseDto.builder()
                .id(game.getId())
                .courtId(game.getCourtId())
                .startDate(game.getStartDate())
                .time(game.getTime())
                .replayUrl(game.getReplayUrl())
                .boxImageUrl(game.getBoxImageUrl())
                .build();
    }

}
