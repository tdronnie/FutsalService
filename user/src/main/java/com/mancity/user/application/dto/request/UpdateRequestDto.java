package com.mancity.user.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateRequestDto {

    private Long id;

    private String nickName;

    private Integer height;

    private Integer weight;

    private Integer foot;

    private Boolean isPlayer;

}
