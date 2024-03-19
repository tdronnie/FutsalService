package com.mancity.social.game.application.dto.request;

import com.mancity.social.game.domain.Player;
import com.mancity.social.game.domain.Team;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class GameDataInputDto {

    private long gameId;

    private Team teamA;

    private Team teamB;

    private List<Player> playersA;

    private List<Player> playersB;

}
