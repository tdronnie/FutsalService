package com.mancity.social.game.application.dto.response;

import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.Player;
import com.mancity.social.game.domain.Team;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameResponseDto {

    private String replayUrl;

    private List<String> highlights; // 회원 id,

    private int gender;

    private Long manager;

    private LocalDate startDate; // 경기일

    private int time; // 경기 시간대, 0~24

    private boolean isOver;

    private int playerNumber;

    private TeamResponseDto teamA;

    private TeamResponseDto teamB;

    private List<PlayerResonseDto> playersA;

    private List<PlayerResonseDto> playersB;

    public static GameResponseDto from(Game game){
        return GameResponseDto.builder()
                .replayUrl(game.getReplayUrl())
                .highlights(game.getHighlights())
                .gender(game.getGender())
                .manager(game.getManager())
                .startDate(game.getStartDate())
                .time(game.getTime())
                .isOver(game.isOver())
                .teamA(TeamResponseDto.fromTeamA(game))
                .teamB(TeamResponseDto.fromTeamB(game))
                .playersA(PlayerResonseDto.fromPlayersA(game))
                .playersB(PlayerResonseDto.fromPlayersB(game))
                .playerNumber(game.getPlayerNumber())
                .build();
    }
}
