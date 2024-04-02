package com.mancity.user.user.application.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlayerListResponseDto {

    private Long id;

    private String nickName;

    private String image;

    private double goalDecision;

    private double pass;

    private double speed;

    private double distanceCovered;

    private double defense;

    private double overall;

    private int height;

    private int weight;

}
