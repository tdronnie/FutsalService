package com.mancity.social.match.application.dto.request;

import com.mancity.social.match.domain.Player;
import com.mancity.social.match.domain.Team;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class MatchDataInputDto {

    private long matchId;

    private List<Team> teamA;

    private List<Team> teamB;

    private List<Player> playersA;

    private List<Player> playersB;

}
