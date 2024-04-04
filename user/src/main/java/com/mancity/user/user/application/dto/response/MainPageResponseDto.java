package com.mancity.user.user.application.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MainPageResponseDto {

    private List<MainPagePlayerDto> players;

    private List<MainPageGameDto> games;

    public static MainPageResponseDto from(List<MainPagePlayerDto> players, List<MainPageGameDto> games){
        return MainPageResponseDto.builder()
                .players(players)
                .games(games)
                .build();
    }

}
