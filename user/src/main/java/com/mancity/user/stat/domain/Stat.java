package com.mancity.user.stat.domain;

import com.mancity.user.stat.application.dto.request.PlusRequestDto;
import com.mancity.user.user.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Stat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    public void plusStat(PlusRequestDto dto) {
        this.speed += dto.getSpeed();
        this.distanceCovered += dto.getDistanceCovered();
        this.pass += dto.getPass();
        this.shotsOnTarget += dto.getShotsOnTarget();
        this.shot += dto.getShot();
        this.goal += dto.getGoal();
        this.assist += dto.getAssist();
        this.turnOverInOffense += dto.getTurnOverInOffense();
        this.turnOverInDefense += dto.getTurnOverInDefense();
        this.playedTimes += 1;
    }
}
