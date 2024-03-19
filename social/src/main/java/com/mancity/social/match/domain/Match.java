package com.mancity.social.match.domain;

import com.mancity.social.match.application.dto.request.MatchDataInputDto;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity(name = "match_table")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Match {

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

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name ="TEAM_A", joinColumns = @JoinColumn(name="id"))
    private List<Team> teamA;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<Team> teamB;

    public void updateHighlights(List<String> highlights){
        this.highlights.addAll(highlights);
    }


    public void uploadVideo(String url){
        this.replayUrl = url;
    }

    public void inputData(MatchDataInputDto dto) {
        this.teamA = dto.getTeamA();
        this.teamB = dto.getTeamB();
        this.playersA = dto.getPlayersA();
        this.playersB = dto.getPlayersB();
    }
}
