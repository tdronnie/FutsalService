package com.mancity.calc.game.application.dto;

import com.mancity.calc.gamedata.domain.PlayerStat;
import com.mancity.calc.gamedata.domain.TeamStat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameDataInputDto {

    private long gameId;

    private TeamStat teamA;

    private TeamStat teamB;

    private List<PlayerStat> playersA;

    private List<PlayerStat> playersB;
}
