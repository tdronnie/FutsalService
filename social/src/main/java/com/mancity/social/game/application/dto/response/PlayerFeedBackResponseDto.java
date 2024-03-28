package com.mancity.social.game.application.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlayerFeedBackResponseDto {

    private Long id; // 플레이어 아이디

    private int distanceCovered; // 총 이동 거리
    
    private int speed; //최고 속도

    private int goal; //득점

    private int assist; //어시스트 수

    private int avgShotOnTargetPerShot; //유효슈팅/총 슈팅

    private int pass; //패스 수

    private int turnOverInOffense; // 공격 시 턴오버 당한 총 횟수

    private int turnOverInDefense; // 수비 시 턴오버 성공한 총 횟수


}
