package com.mancity.user.user.application.dto.response;

import com.mancity.user.game.application.response.GameMainResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MainPageGameDto {

    private long id;

    private long courtId;

    private LocalDate startDate;

    private int time;

    private String replayUrl;

    public static MainPageGameDto from(GameMainResponseDto dto){
        return MainPageGameDto.builder()
                .id(dto.getId())
                .startDate(dto.getStartDate())
                .time(dto.getTime())
                .replayUrl(dto.getReplayUrl())
                .build();
    }

}
