package com.mancity.social.highlight.application;

import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.repository.GameRepository;
import com.mancity.social.game.exception.NoSuchGameException;
import com.mancity.social.highlight.application.dto.request.CreateHighlightRequestDto;
import com.mancity.social.highlight.application.dto.request.HighlightStoreRequestDto;
import com.mancity.social.highlight.application.dto.response.HighlightReponseDto;
import com.mancity.social.highlight.domain.Highlight;
import com.mancity.social.highlight.domain.Myhighlight;
import com.mancity.social.highlight.domain.repository.HighlightRepository;
import com.mancity.social.highlight.exception.NoSuchHighlightException;
import com.mancity.social.user.presentation.UserFeignClient;
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

    private final HighlightRepository highlightRepository;

    private final UserFeignClient userFeignClient;


    public void createHighlights(CreateHighlightRequestDto dto) {
        Game game = gameRepository.findById(dto.getGameId()).orElseThrow(NoSuchGameException::new);
        highlightRepository.save(Highlight.builder()
                .gameId(game.getId())
                .myhighlights(new ArrayList<>())
                .time(dto.getTime())
                .build());
    }


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

    public void storeMyHighlight(HighlightStoreRequestDto dto) {
        //하이라이트를 마이하이라이트에 저장
        Highlight highlight = highlightRepository.findById(dto.getHighlightId()).orElseThrow(NoSuchHighlightException::new);
        //유저 정보 가져오기
        Long user = userFeignClient.findById(dto.getUserId()).getId();

        //마이 하이라이트 생성 후 하이라이트와 유저에 업데이트
        Myhighlight myhighlight = Myhighlight.builder()
                .highlight(highlight)
                .userId(user)
                .build();

        //하이라이트의 마이하이라이트 리스트에 업데이트
        highlight.addStoredHighlights(myhighlight);


    }


}
