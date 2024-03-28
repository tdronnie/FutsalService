package com.mancity.user.game.application.response;

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

}
