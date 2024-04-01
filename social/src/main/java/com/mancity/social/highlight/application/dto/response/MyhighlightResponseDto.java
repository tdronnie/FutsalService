package com.mancity.social.highlight.application.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MyhighlightResponseDto {

    private Long id;

    private String url;

    private String time;
}
