package com.mancity.social.game.domain;

import com.mancity.social.game.application.dto.request.GameDataInputDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String replayUrl;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<String> highlights; // 회원 id,

    private int gender;

    private Long manager;

    private LocalDate startDate; // 경기일

    private int time; // 경기 시간대, 0~24

    private boolean isOver;

    private int playerNumber;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn
    private Team teamA;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn
    private Team teamB;

    //    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL, orphanRemoval = true)
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn
    @Builder.Default
    private List<Player> playersA = new ArrayList<>();

    //    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL, orphanRemoval = true)
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn
    @Builder.Default
    private List<Player> playersB = new ArrayList<>();

    public void updateHighlights(List<String> highlights) {
        this.highlights.addAll(highlights);
    }

    public void uploadVideo(String url) {
        this.replayUrl = url;
    }

    public void inputData(GameDataInputDto dto) {
        this.teamA = dto.getTeamA();
        this.teamB = dto.getTeamB();
        for (Player p : dto.getPlayersA()) {
            this.playersA.add(p);
            p.mapGame(this);
        }
        for (Player p : dto.getPlayersB()) {
            this.playersB.add(p);
            p.mapGame(this);
        }
    }
}
