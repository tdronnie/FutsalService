package com.mancity.calc.gamedata.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class createHighlightRequestDto {

    private Long gameId;

    private String time;
}
