package com.mancity.user.user.application.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class MainPagePlayerDto {

    private Long id;

    private String nickName;

    private String image;

    private int goal;

    private int pass;

    private int playedTimes;

}
