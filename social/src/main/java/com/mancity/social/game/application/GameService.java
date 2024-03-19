package com.mancity.social.game.application;

import com.mancity.social.game.application.dto.request.CheckManagerDto;
import com.mancity.social.game.application.dto.request.GameCreateRequestDto;
import com.mancity.social.game.application.dto.request.GameDataInputDto;
import com.mancity.social.game.application.dto.request.GameVideoUploadDto;
import com.mancity.social.game.application.dto.response.GameResponseDto;
import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.repository.GameRepository;
import com.mancity.social.game.exception.NoSuchGameException;
import com.mancity.social.game.infrastructure.file.util.S3Uploader;
import com.mancity.social.game.presentation.UserFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class GameService {

    private final GameRepository gameRepository;

    private final S3Uploader uploader;

    private final UserFeignClient userFeignClient;

    public void create(GameCreateRequestDto dto) {
        gameRepository.save(dto.toEntity());
    }

    public GameResponseDto upload(List<MultipartFile> files, GameVideoUploadDto dto) {
        List<String> url = uploader.uploadVideo("match", files);
        Game game = findById(dto.getId());
        game.uploadVideo(url.get(0));

        // 업로드 완료 시, flask에 업로드 완료에 대해 call
        return GameResponseDto.from(game);
    }

    public GameResponseDto findMatchById(Long id) {
        Game game = findById(id);
        return GameResponseDto.from(game);
    }

    public boolean checkManager(CheckManagerDto dto) {
        Game game = findById(dto.getMatchId());
        return game.getManager() == dto.getUserId();
    }

    public void inputData(GameDataInputDto dto) {
        Game game = findById(dto.getGameId());
        game.inputData(dto);
    }

    public List<GameResponseDto> findAllByUserId(long id) {
        // user 에서 id를 통해 nickname을 가져온 후, 해당 nickname이 속한 match 의 정보들을 전부 리턴
//        String nickname = userFeignClient.findById(id).getNickName();
        List<Game> games = gameRepository.findAllByNickname("joonseong111");
//        List<Game> games = gameRepository.findAll();
        return games.stream()
                .map(GameResponseDto::from)
                .toList();
    }

    private Game findById(long id) {
        return gameRepository.findById(id)
                .orElseThrow(NoSuchGameException::new);
    }
}
