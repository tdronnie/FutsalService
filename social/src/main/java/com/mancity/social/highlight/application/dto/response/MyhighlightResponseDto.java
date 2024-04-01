package com.mancity.social.highlight.application.dto.response;

import com.mancity.social.highlight.domain.Highlight;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MyhighlightResponseDto {

    private Highlight highlight;
}
