package com.mancity.calc.gamedata.application.dto.response;

import com.mancity.calc.gamedata.domain.PlayerStat;
import com.mancity.calc.gamedata.domain.TeamA;
import com.mancity.calc.gamedata.domain.TeamB;
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

    private TeamA teamA;

    private TeamB teamB;

    private List<PlayerStat> teamA_players;

    private List<PlayerStat> teamB_players;

}
