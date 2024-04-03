package com.mancity.social.highlight.application.dto.request;

import com.mancity.social.highlight.domain.Highlight;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateHighlightRequestDto {

    private Long gameId;

    private String time;

    public Highlight toEntity(String url){
        return Highlight.builder()
                .myhighlights(new ArrayList<>())
                .time(time)
                .url(url)
                .build();
    }
}
