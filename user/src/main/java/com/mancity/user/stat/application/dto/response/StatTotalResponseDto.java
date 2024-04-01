package com.mancity.user.stat.application.dto.response;

import com.mancity.user.stat.domain.Stat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class StatTotalResponseDto {

    private int speed; // 최고속도

    private int distanceCovered; // 총 이동 거리

    private int pass; // 총 패스 횟수

    private int shotsOnTarget; // 총 유효 슈팅 수

    private int shot; // 총 슈팅 횟수

    private int goal; // 총 득점 수

    private int assist; // 총 어시스트 수

    private int turnOverInOffense; // 공격 시 턴오버 당한 총 횟수

    private int turnOverInDefense; // 수비 시 턴오버 성공한 총 횟수

    private int playedTimes; // 총 경기 출장 횟수
    public static StatTotalResponseDto from(Stat stat){
        return StatTotalResponseDto.builder()
                .speed(stat.getSpeed())
                .distanceCovered(stat.getDistanceCovered())
                .pass(stat.getPass())
                .shotsOnTarget(stat.getShotsOnTarget())
                .shot(stat.getShot())
                .goal(stat.getGoal())
                .assist(stat.getAssist())
                .turnOverInOffense(stat.getTurnOverInOffense())
                .turnOverInDefense(stat.getTurnOverInDefense())
                .playedTimes(stat.getPlayedTimes())
                .build();
    }
}
