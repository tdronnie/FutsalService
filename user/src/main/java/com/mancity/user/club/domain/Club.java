package com.mancity.user.club.domain;

import com.mancity.user.user.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "club_id")
    private Long id;

    @OneToMany(mappedBy = "club", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<User> clubMembers = new ArrayList<>();

    //클럽 이름
    private String name;

    //클럽장 아이디
    private Long masterId;

    //엠블럼
    private String emblem;

    //인원
    private int memberCnt;

    //클럽 스코어
    private int score;

    //지역
    private String region;

    public void uploadEmblem(String url) {
        this.emblem = url;
    }
}
