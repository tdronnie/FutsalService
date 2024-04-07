package com.mancity.social.highlight.application.dto.request;

import com.mancity.social.game.domain.Game;
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

    public Highlight toEntity(String url, Game game){
        return Highlight.builder()
                .myhighlights(new ArrayList<>())
                .time(time)
                .game(game)
                .url(url)
                .build();
    }
}
