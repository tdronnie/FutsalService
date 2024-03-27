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

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Entity
public class MainStat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double goalDecision;

    private double pass;

    private double speed;

    private double distanceCovered;

    private double defense;

    public double getOverall() {
        return goalDecision + distanceCovered + pass + speed + defense;
    }

    public void update(Stat stat) {
        this.goalDecision = (calc(stat.getGoal(), stat.getShot()));
        this.pass = (calc(stat.getPass(), stat.getPlayedTimes()));
        this.distanceCovered = (calc(stat.getDistanceCovered(), stat.getPlayedTimes()));
        this.speed = (calc(stat.getSpeed(), stat.getPlayedTimes()));
        this.defense = (calc(stat.getTurnOverInDefense(), stat.getPlayedTimes()));
    }

    private static double calc(int x, int y) {
        return (double) Math.round(((double) x / y) * 100) / 100;
    }

}
