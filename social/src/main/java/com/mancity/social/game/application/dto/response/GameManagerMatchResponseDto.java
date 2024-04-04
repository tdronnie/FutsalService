package com.mancity.social.game.application.dto.response;

import com.mancity.social.game.domain.Game;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class GameManagerMatchResponseDto {

    private long gameId;

    private long courtId;

    private LocalDate startDate;

    private int time;

    private int playerNumber;

    public static GameManagerMatchResponseDto from(Game game){
        return GameManagerMatchResponseDto.builder()
                .gameId(game.getId())
                .courtId(game.getCourtId())
                .startDate(game.getStartDate())
                .time(game.getTime())
                .playerNumber(game.getPlayerNumber())
                .build();
    }

}
