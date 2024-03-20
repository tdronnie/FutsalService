package com.mancity.social.game.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nickname;

    private int speed; // 최고속도

    private int distanceCovered; // 총 이동 거리

    private int pass; // 총 패스 횟수

    private int shotOnTarget; // 총 유효 슈팅 수

    private int shot; // 총 슈팅 횟수

    private int goal; // 총 득점 수

    private int assist; // 총 어시스트 수

    private int turnOverInOffense; // 공격 시 턴오버 당한 총 횟수

    private int turnOverInDefense; // 수비 시 턴오버 성공한 총 횟수

    public void mapGame(Game game) {
//        this.game = game;
    }

    public void allocateData(String nickname) {
        this.nickname = nickname;
        // 호출 단계의 메소드에서, 해당 데이터들을 user stat 에 넣어주는 것 필요 !
    }
}
