package com.mancity.social.match.application.dto.response;

import com.mancity.social.match.domain.Match;
import jakarta.persistence.ElementCollection;
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
public class MatchResponseDto {

    private String replayUrl;

    private List<String> highlights; // 회원 id,

    private int gender;

    private Long manager;

    private LocalDate startDate; // 경기일

    private int time; // 경기 시간대, 0~24

    private boolean isOver;

    private int playerNumber;

    public static MatchResponseDto from(Match match){
        return MatchResponseDto.builder()
                .replayUrl(match.getReplayUrl())
                .highlights(match.getHighlights())
                .gender(match.getGender())
                .manager(match.getManager())
                .startDate(match.getStartDate())
                .time(match.getTime())
                .isOver(match.isOver())
                .playerNumber(match.getPlayerNumber())
                .build();
    }
}
