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

    private int goal;

    private int pass;

    private int shot;

    private int shotOnTarget;

}
