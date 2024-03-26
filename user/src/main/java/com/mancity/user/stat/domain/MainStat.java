package com.mancity.user.stat.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class MainStat {
    private double goalDecision;

    private double pass;

    private double speed;

    private double distanceCovered;

    private double defense;

    public double getOverall() {
        return goalDecision + distanceCovered + pass + speed + defense;
    }

    public static MainStat from(Stat stat) {
        return MainStat.builder()
                .goalDecision(calc(stat.getGoal(), stat.getShot()))
                .pass(calc(stat.getPass(), stat.getPlayedTimes()))
                .distanceCovered(calc(stat.getDistanceCovered(), stat.getPlayedTimes()))
                .speed(calc(stat.getSpeed(), stat.getPlayedTimes()))
                .defense(calc(stat.getTurnOverInDefense(), stat.getPlayedTimes()))
                .build();
    }

    private static double calc(int x, int y) {
        return (double) Math.round(((double) x / y) * 100) / 100;
    }

}
