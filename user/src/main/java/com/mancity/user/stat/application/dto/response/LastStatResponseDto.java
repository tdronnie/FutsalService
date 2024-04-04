package com.mancity.user.stat.application.dto.response;

import com.mancity.user.stat.domain.LastStat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LastStatResponseDto {
    private double goalDecision;

    private double pass;

    private double speed;

    private double distanceCovered;

    private double defense;

    public static LastStatResponseDto from(LastStat lastStat){
        return LastStatResponseDto.builder()
                .goalDecision(lastStat.getGoalDecision())
                .pass(lastStat.getPass())
                .speed(lastStat.getSpeed())
                .distanceCovered(lastStat.getDistanceCovered())
                .defense(lastStat.getDefense())
                .build();
    }
}
