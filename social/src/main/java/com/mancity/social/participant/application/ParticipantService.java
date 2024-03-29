package com.mancity.social.participant.application;

import com.mancity.social.participant.application.dto.request.ParticipateRequestReplyDto;
import com.mancity.social.participant.application.dto.request.GameParticipateRequestDto;
import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.repository.GameRepository;
import com.mancity.social.game.exception.NoSuchGameException;
import com.mancity.social.participant.application.dto.request.GameParticipateSuggestDto;
import com.mancity.social.participant.application.dto.request.ParticipateSuggestReplyDto;
import com.mancity.social.participant.application.dto.respose.ParticipantResponseDto;
import com.mancity.social.participant.application.dto.respose.ParticipateRequestResponseDto;
import com.mancity.social.participant.application.dto.respose.ParticipateSuggestResponseDto;
import com.mancity.social.participant.domain.Participant;
import com.mancity.social.participant.domain.ParticipateRequest;
import com.mancity.social.participant.domain.ParticipateSuggest;
import com.mancity.social.participant.domain.repository.ParticipateRequestRepoisotry;
import com.mancity.social.participant.domain.repository.ParticipateSuggestRepository;
import com.mancity.social.participant.exception.AlreadyParticipatedException;
import com.mancity.social.participant.exception.AlreadyRequestedGameException;
import com.mancity.social.participant.exception.GameFullException;
import com.mancity.social.participant.exception.NoSuchParticipantRequestException;
import com.mancity.social.user.application.UserService;
import com.mancity.social.user.application.dto.request.AlarmCreateDto;
import com.mancity.social.user.presentation.UserFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ParticipantService {

    private final GameRepository gameRepository;

    private final ParticipateRequestRepoisotry participateRequestRepoisotry;

    private final ParticipateSuggestRepository participateSuggestRepository;

    private final UserService userService;

    public void requestParticipate(GameParticipateRequestDto dto) {
        validateParticipateRequest(dto);
        Game game = gameRepository.findById(dto.getGameId())
                .orElseThrow(NoSuchGameException::new);
        ParticipateRequest pr = participateRequestRepoisotry.save(dto.toEntity());
        userService.generateAlarm(dto.getUserId(), game.getManager(), "GAME_REQUEST", pr.getId());
    }

    public void replyRequestParticipate(ParticipateRequestReplyDto dto) {
        ParticipateRequest participateRequest = participateRequestRepoisotry.findById(dto.getParticipateRequestId())
                .orElseThrow(NoSuchParticipantRequestException::new);
        // 참여요청을 수락/거절 바꿔주고
        participateRequest.updateStatus(dto.isResponse());

        // 만일 수락이면
        if (dto.isResponse()) {
            // 해당 게임에 해당 유저를 participant 에 넣어주고
            Game game = gameRepository.findById(participateRequest.getGameId()).orElseThrow(NoSuchGameException::new);
            Participant participant = Participant.builder()
                    .userId(participateRequest.getSender())
                    .game(game)
                    .image(getImageFromUser(participateRequest.getSender()))
                    .build();
            game.participate(participant);
            userService.generateAlarm(game.getManager(), participateRequest.getSender(), "GAME_REQUEST_REPLY", 0);
        }

    }

    public List<ParticipantResponseDto> findParticipantsByGameId(long id) {
        Game game = gameRepository.findById(id).orElseThrow(NoSuchGameException::new);
        return game.getParticipants()
                .stream()
                .map(ParticipantResponseDto::from)
                .toList();
    }

    public List<ParticipateRequestResponseDto> findRequestsByGameId(long id) {
        return participateRequestRepoisotry.findAllByGameId(id)
                .stream()
                .map(ParticipateRequestResponseDto::from)
                .toList();
    }

    public void suggestParticipate(GameParticipateSuggestDto dto) {
        // 유효성
        Game game = gameRepository.findById(dto.getGameId())
                .orElseThrow(NoSuchGameException::new);
        ParticipateSuggest ps = participateSuggestRepository.save(dto.toEntity());
        userService.generateAlarm(dto.getSenderId(), dto.getReceiverId(), "GAME_SUGGEST", ps.getId());
    }

    private void validateParticipateRequest(GameParticipateRequestDto dto) {
        Game game = gameRepository.findById(dto.getGameId())
                .orElseThrow(NoSuchGameException::new);
        if (game.getParticipants().size() >= game.getPlayerNumber()) { // 사람이 다 찼다면
            throw new GameFullException();
        }

        if (game.isExistParticipant(dto.getUserId())) { // 이미 참여했다면
            throw new AlreadyParticipatedException();
        }

        // 해당 게임에서, 어떤 유저가 참여 요청을 보낸게 있는지 확인
        // 있다면, 재요청이 불가능
        participateRequestRepoisotry.findByGameIdAndSender(dto.getGameId(), dto.getUserId())
                .ifPresent(pr -> {
                    throw new AlreadyRequestedGameException();
                });
    }

    public void replySuggestParticipate(ParticipateSuggestReplyDto dto) {
        ParticipateSuggest participateSuggest = participateSuggestRepository.findById(dto.getParticipateSuggestId())
                .orElseThrow();
        participateSuggest.updateStatus(dto.isResponse());

        if (dto.isResponse()) {
            Game game = gameRepository.findById(participateSuggest.getGameId()).orElseThrow(NoSuchGameException::new);
            Participant participant = Participant.builder()
                    .userId(participateSuggest.getSenderId())
                    .game(game)
                    .image(getImageFromUser(participateSuggest.getSenderId()))
                    .build();
            game.participate(participant);
            userService.generateAlarm(participateSuggest.getReceiverId(), participateSuggest.getSenderId(), "GAME_SUGGEST_REPLY", 0);
        }
    }

    public List<ParticipateSuggestResponseDto> findSuggestsByGameId(long id) {
        return participateSuggestRepository.findAllByGameId(id)
                .stream()
                .map(ParticipateSuggestResponseDto::from)
                .toList();
    }

    public List<ParticipateSuggestResponseDto> findSuggestsBySenderId(long senderId) {
        return participateSuggestRepository.findAllBySenderId(senderId)
                .stream()
                .map(ParticipateSuggestResponseDto::from)
                .toList();
    }

    public List<ParticipateSuggestResponseDto> findSuggestsByReceiverId(long receiverId) {
        return participateSuggestRepository.findAllByReceiverId(receiverId)
                .stream()
                .map(ParticipateSuggestResponseDto::from)
                .toList();
    }

    private String getImageFromUser(long id){
        return userService.findByIdFromUser(id).getImage();
    }

}
