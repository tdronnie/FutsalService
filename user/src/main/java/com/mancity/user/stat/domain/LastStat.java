package com.mancity.user.stat.domain;

import com.mancity.user.stat.application.dto.request.PlusRequestDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
public class LastStat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double goalDecision;

    private double pass;

    private double speed;

    private double distanceCovered;

    private double defense;

    public void update(PlusRequestDto dto){
        this.goalDecision = calc(dto.getGoal(), dto.getShot());
        this.pass = dto.getPass();
        this.distanceCovered = dto.getDistanceCovered();
        this.speed = dto.getSpeed();
        this.defense = dto.getTurnOverInDefense();
    }

    private static double calc(int x, int y) {
        return (double) Math.round(((double) x / y) * 100) / 100;
    }

}
