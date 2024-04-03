package com.mancity.calc.gamedata.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Data {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int frame_num;

    @OneToOne
    private Ball ball;

    @OneToOne
    private GoalPost team_A_goal_post;

    @OneToOne
    private GoalPost team_B_goal_post;

    @OneToMany
    private List<Player> team_A_players;

    @OneToMany
    private List<Player> team_B_players;

    @OneToOne
    private Field field;


}
