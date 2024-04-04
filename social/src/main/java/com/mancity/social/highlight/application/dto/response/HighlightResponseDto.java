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
public class HighlightResponseDto {

    private Long id;

    private String url;

    private String time;

    private Long courtId;

    public static HighlightResponseDto from(Highlight highlight, long courtId){
        return HighlightResponseDto.builder()
                .id(highlight.getId())
                .url(highlight.getUrl())
                .time(highlight.getTime())
                .courtId(courtId)
                .build();
    }
}
