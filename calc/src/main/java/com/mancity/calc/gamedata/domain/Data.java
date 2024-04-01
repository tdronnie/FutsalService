package com.mancity.calc.gamedata.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Data {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int frameNumber;

    @OneToOne
    private Ball ball;

    @OneToOne
    private GoalPost teamA_goalPost;

    @OneToOne
    private GoalPost teamB_goalPost;

    @OneToOne
    private TeamA teamA;

    @OneToOne
    private TeamB teamB;

}
