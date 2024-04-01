package com.mancity.social.highlight.application;

import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.repository.GameRepository;
import com.mancity.social.game.exception.NoSuchGameException;
import com.mancity.social.highlight.application.dto.request.CreateHighlightRequestDto;
import com.mancity.social.highlight.application.dto.request.StoreHighlightRequestDto;
import com.mancity.social.highlight.application.dto.response.HighlightReponseDto;
import com.mancity.social.highlight.application.dto.response.MyhighlightResponseDto;
import com.mancity.social.highlight.domain.Highlight;
import com.mancity.social.highlight.domain.Myhighlight;
import com.mancity.social.highlight.domain.repository.HighlightRepository;
import com.mancity.social.highlight.exception.NoSuchHighlightException;
import com.mancity.social.user.application.dto.response.UserResponseDto;
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
        gameRepository.findById(id).orElseThrow(NoSuchGameException::new);

        //gameId로 하이라이트 추출
        List<Highlight> highlights = highlightRepository.findByGameId(id);
        List<HighlightReponseDto> lists = new ArrayList<>();
        for (Highlight h : highlights) {
            lists.add(HighlightReponseDto.builder()
                    .id(h.getId())
                    .build());

        }
        return lists;
    }

    public void storeMyHighlight(StoreHighlightRequestDto dto) {
        Long user = userFeignClient.findById(dto.getUserId()).getId();
        Highlight highlight = highlightRepository.findById(dto.getHighlightId()).orElseThrow(NoSuchHighlightException::new);

        //마이 하이라이트 생성 후 하이라이트와 유저에 업데이트
        Myhighlight myhighlight = Myhighlight.builder()
                .highlight(highlight)
                .userId(user)
                .build();

        //하이라이트의 마이하이라이트 리스트에 업데이트
        highlight.addStoredHighlights(myhighlight);


    }


    public List<MyhighlightResponseDto> getMyHighlights(Long id) {
        UserResponseDto userDto = userFeignClient.findById(id);
        List<Myhighlight> myhighlights = highlightRepository.findAllByUserId(userDto.getId());

        List<MyhighlightResponseDto> responseList = new ArrayList<>();
        for (Myhighlight h : myhighlights) {
            responseList.add(MyhighlightResponseDto.builder()
                    .highlight(h.getHighlight())
                    .build());
        }

        return responseList;
    }


}
