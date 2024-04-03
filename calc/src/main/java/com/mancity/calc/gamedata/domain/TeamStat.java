package com.mancity.calc.gamedata.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TeamStat {

    private int speed;

    private int distanceCovered;

    private int pass;

    private int shotsOnTarget;

    private int shot;

    private int goal;

    private int assist;

    private int turnOverInOffense;

    private int turnOverInDefense;
}
