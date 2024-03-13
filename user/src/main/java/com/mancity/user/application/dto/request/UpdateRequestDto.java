package com.mancity.user.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class UpdateRequestDto {

    private Long id;

    private String nickName;

    private int height;

    private int weight;

    private int foot;

    private boolean isPlayer;

}
