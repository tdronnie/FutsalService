package com.mancity.calc.gamedata.application.dto.response;

import com.mancity.calc.gamedata.domain.Player;
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
public class GamedataResponseDto {

    private Long gameId;

    private TeamStat teamA;

    private TeamStat teamB;

    private List<PlayerStat> teamA_players;

    private List<PlayerStat> teamB_players;

}
