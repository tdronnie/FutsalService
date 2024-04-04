package com.mancity.user.stat.application.dto.response;

import com.mancity.user.stat.domain.Stat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StatAvgResponseDto {
    private double speed;

    private double distanceCovered;

    private double pass;

    private double shotsOnTarget;

    private double shot;

    private double goal;

    private double assist;

    private double turnOverInOffense;

    private double turnOverInDefense;

    private int playedTimes;

    public static StatAvgResponseDto from(Stat stat){
        return StatAvgResponseDto.builder()
                .speed(calc(stat.getSpeed(), stat.getPlayedTimes()))
                .distanceCovered(calc(stat.getDistanceCovered(), stat.getPlayedTimes()))
                .pass(calc(stat.getPass(), stat.getPlayedTimes()))
                .shotsOnTarget(calc(stat.getShotsOnTarget(), stat.getPlayedTimes()))
                .shot(calc(stat.getShot(), stat.getPlayedTimes()))
                .goal(calc(stat.getGoal(), stat.getPlayedTimes()))
                .assist(calc(stat.getAssist(), stat.getPlayedTimes()))
                .turnOverInOffense(calc(stat.getTurnOverInOffense(), stat.getPlayedTimes()))
                .turnOverInDefense(calc(stat.getTurnOverInDefense(), stat.getPlayedTimes()))
                .playedTimes(stat.getPlayedTimes()) // playedTimes는 int 타입으로 반환
                .build();
    }

    private static double calc(int x, int y){
        return (double) Math.round(((double) x / y) * 100) / 100;
    }
}
