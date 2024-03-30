package com.mancity.social.highlight.application;

import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.repository.GameRepository;
import com.mancity.social.game.exception.NoSuchGameException;
import com.mancity.social.highlight.application.dto.response.HighlightReponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class HighlightService {

    private final GameRepository gameRepository;


    public List<HighlightReponseDto> getGameHighlights(Long id) {
        Game game = gameRepository.findById(id).orElseThrow(NoSuchGameException::new);
        List<String> highlights = game.getHighlights();
        List<HighlightReponseDto> lists = new ArrayList<>();
        for (String url : highlights) {
            lists.add(HighlightReponseDto.builder()
                    .highligtUrl(url)
                    .build());

        }
        return lists;
    }


}
