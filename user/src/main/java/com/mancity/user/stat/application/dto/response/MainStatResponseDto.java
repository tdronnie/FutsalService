package com.mancity.user.stat.application.dto.response;

import com.mancity.user.stat.domain.MainStat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MainStatResponseDto {

    private double goalDecision;

    private double pass;

    private double speed;

    private double distanceCovered;

    private double defense;

    public static MainStatResponseDto from(MainStat mainStat){
        return MainStatResponseDto.builder()
                .goalDecision(mainStat.getGoalDecision())
                .pass(mainStat.getPass())
                .speed(mainStat.getSpeed())
                .distanceCovered(mainStat.getDistanceCovered())
                .defense(mainStat.getDefense())
                .build();
    }

}
