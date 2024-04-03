package com.mancity.social.game.application.dto.response;

import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.GameLevel;
import com.mancity.social.participant.application.dto.respose.ParticipantResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class GameDetailResponseDto {

    private long gameId;

    private String replayUrl;

    private String boxImageUrl;

    private int gender;

    private Long managerId;

    private String managerName;

    private LocalDate startDate;

    private int time;

    private int playerNumber;

    private List<ParticipantResponseDto> participants;

    private GameLevel level;

    private long courtId;

    private boolean isCalcOver;

    private boolean isOver;

    public static GameDetailResponseDto from(Game game, String managerName){
        return GameDetailResponseDto.builder()
                .gameId(game.getId())
                .replayUrl(game.getReplayUrl())
                .boxImageUrl(game.getBoxImageUrl())
                .gender(game.getGender())
                .managerId(game.getManager())
                .managerName(managerName)
                .startDate(game.getStartDate())
                .time(game.getTime())
                .playerNumber(game.getPlayerNumber())
                .participants(game.getParticipants()
                        .stream()
                        .map(ParticipantResponseDto::from)
                        .toList())
                .level(game.getLevel())
                .courtId(game.getCourtId())
                .isCalcOver(game.isCalcOver())
                .isOver(game.isOver())
                .build();
    }
}
