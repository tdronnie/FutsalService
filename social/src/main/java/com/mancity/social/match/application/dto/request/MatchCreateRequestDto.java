package com.mancity.social.match.application.dto.request;

import com.mancity.social.match.domain.Match;
import jakarta.persistence.ElementCollection;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MatchCreateRequestDto {

    private String replayUrl;

    private int gender;

    private Long manager;

    private LocalDate startDate; // 경기일

    private int time; // 경기 시간대, 0~24

    private boolean isOver;

    private int playerNumber;

    public Match toEntity(){
        return Match.builder()
                .replayUrl("")
                .gender(gender)
                .manager(manager)
                .startDate(startDate)
                .time(time)
                .isOver(false)
                .playerNumber(playerNumber)
                .build();
    }
}
