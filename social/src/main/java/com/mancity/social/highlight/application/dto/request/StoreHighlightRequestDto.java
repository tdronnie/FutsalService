package com.mancity.social.highlight.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StoreHighlightRequestDto {

    private Long highlightId;

    private Long userId;

}
