package com.mancity.calc.gamedata.application.dto.response;

import com.mancity.calc.gamedata.domain.GameData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GamedataResponseDto {

    private Long gameId;

    private GameData data;
}
