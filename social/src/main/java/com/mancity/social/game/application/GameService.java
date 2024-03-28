package com.mancity.social.game.application;

import com.mancity.social.game.application.dto.request.*;
import com.mancity.social.game.application.dto.response.*;
import com.mancity.social.game.domain.repository.GameRepositorySupport;
import com.mancity.social.user.application.dto.response.UserResponseDto;
import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.Player;
import com.mancity.social.game.domain.repository.GameRepository;
import com.mancity.social.game.domain.repository.PlayerRepository;
import com.mancity.social.game.exception.NoSuchGameException;
import com.mancity.social.game.exception.NoSuchPlayerException;
import com.mancity.social.game.infrastructure.file.util.S3Uploader;
import com.mancity.social.user.presentation.UserFeignClient;
import com.mancity.social.user.application.dto.request.UserPlusRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class GameService {

    private final GameRepository gameRepository;

    private final PlayerRepository playerRepository;

    private final S3Uploader uploader;

    private final UserFeignClient userFeignClient;

    private final GameRepositorySupport gameRepositorySupport;

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
        String nickname = findByIdFromUserService(id).getNickName();
        List<Game> games = gameRepository.findAllByNickname(nickname);
        return games.stream()
                .map(GameResponseDto::from)
                .toList();
    }

    public void allocateData(GameDataAllocateDto dto) {
        Player player = playerRepository.findById(dto.getGamePlayerId()).orElseThrow(NoSuchPlayerException::new);
        player.allocateData(findByIdFromUserService(dto.getUserId()).getNickName());
        userFeignClient.plus(UserPlusRequestDto.of(player, dto.getUserId()));
    }

    public List<GameResponseDto> findGamesByParticipantUserId(Long userId) {
        return gameRepositorySupport.findGamesByParticipantUserId(userId)
                .stream()
                .map(GameResponseDto::from)
                .collect(Collectors.toList());
    }

    private Game findById(long id) {
        return gameRepository.findById(id)
                .orElseThrow(NoSuchGameException::new);
    }

    private UserResponseDto findByIdFromUserService(long id) {
        return userFeignClient.findById(id);
    }

    public List<GameResponseDto> findAllByFilters(Integer gender, Integer region, Integer playerNumber, String level) {
        return gameRepositorySupport.findAllByFilters(gender, region, playerNumber, level)
                .stream()
                .map(GameResponseDto::from)
                .toList();
    }

    public TeamDataResponseDto findTeamDataByGameId(Long id) {
        Game game = findById(id);
        return TeamDataResponseDto.from(game);
    }

    public PlayerDataResponseDto findPlayerDataByGameId(Long id) {
        Game game = findById(id);
        return PlayerDataResponseDto.from(game);
    }

    public TeamFeedbackResponseDto getTeamsFeedback(Long id) {
        Game game = findById(id);
        return TeamFeedbackResponseDto.builder()
                .possession(game.getTeamA().getPossession() > game.getTeamB().getPossession() ? 1 : 2)
                .shot(game.getTeamA().getShot() > game.getTeamB().getShot() ? 1 : 2)
                .pass(game.getTeamA().getPass() > game.getTeamB().getPass() ? 1 : 2)
                .goal(game.getTeamA().getGoal() > game.getTeamB().getGoal() ? 1 : 2)
                .activityLevel(game.getTeamA().getGoal() > game.getTeamB().getGoal() ? 1 : 2)
                .build();

    }

    public PlayerFeedBackResponseDto getPersonalFeedBack(Long gameId, Long playerId) {
        Game game = gameRepository.findById(gameId).orElseThrow(NoSuchGameException::new);
        Player player = playerRepository.findById(playerId).orElseThrow(NoSuchPlayerException::new);

        //플레이어가 진행한 경기 가져오기
        List<Game> games = gameRepository.findAllByNickname(player.getNickname());
        //진행한 경기 중 gameId와 맞는 경기 찾기
        int sumCovered = 0;
        int sumSpeed = 0;
        int sumGoal = 0;
        int sumAssist = 0;
        int sumShotOnTargetPerShot = 0;
        int sumPass = 0;
        int sumTurnOverOOff = 0;
        int sumTurnOverDef = 0;

        Player feedP = new Player();
        for (Game g : games) {
            if (game.getId() == g.getId()) {
                //모든 플레이어의 평균 보다 높으면 1 낮으면 2
                for (Player p : g.getPlayersA()) {
                    sumCovered += p.getDistanceCovered();
                    sumSpeed += p.getSpeed();
                    sumGoal += p.getGoal();
                    sumAssist += p.getAssist();
                    if(p.getShot() == 0) sumShotOnTargetPerShot = 0;
                    else sumShotOnTargetPerShot = p.getShotOnTarget() / p.getShot();
                    sumPass += p.getPass();
                    sumTurnOverOOff += p.getTurnOverInOffense();
                    sumTurnOverDef += p.getTurnOverInDefense();

                    if (player.getId() == p.getId()) {
                        feedP = p;
                    }
                }
                for (Player p : g.getPlayersB()) {
                    sumCovered += p.getDistanceCovered();
                    sumSpeed += p.getSpeed();
                    sumGoal += p.getGoal();
                    sumAssist += p.getAssist();
                    if(p.getShot() == 0) sumShotOnTargetPerShot = 0;
                    else sumShotOnTargetPerShot = p.getShotOnTarget() / p.getShot();
                    sumPass += p.getPass();
                    sumTurnOverOOff += p.getTurnOverInOffense();
                    sumTurnOverDef += p.getTurnOverInDefense();
                    if (player.getId() == p.getId()) {
                        feedP = p;
                    }
                }
                break;
            }
        }
        double avgCovered = (double) sumCovered / game.getPlayerNumber();
        double avgSpeed = (double) sumSpeed / game.getPlayerNumber();
        double avgGoal = (double) sumGoal / game.getPlayerNumber();
        double avgAssist = (double) sumAssist / game.getPlayerNumber();
        double avgShotOnTargetPerShot = (double) sumShotOnTargetPerShot / game.getPlayerNumber();
        double avgPass = (double) sumPass / game.getPlayerNumber();
        double avgOff = (double) sumTurnOverOOff / game.getPlayerNumber();
        double avgDef = (double) sumTurnOverDef / game.getPlayerNumber();
        log.info("avgCovered={}", avgCovered);
        log.info("avgSpeed={}", avgSpeed);
        log.info("avgGoal={}", avgGoal);
        log.info("avgAssist={}", avgAssist);
        log.info("avgShotOnTargetPerShot={}", avgShotOnTargetPerShot);
        log.info("avgPass={}", avgPass);
        log.info("avgOff={}", avgOff);
        log.info("avgDef={}", avgDef);
        return PlayerFeedBackResponseDto.builder()
                .id(feedP.getId())
                .distanceCovered(feedP.getDistanceCovered() > avgCovered ? 1 : 2)
                .speed(feedP.getSpeed() > avgSpeed ? 1 : 2)
                .goal(feedP.getGoal() > avgGoal ? 1 : 2)
                .assist(feedP.getAssist() > avgAssist ? 1 : 2)
                .avgShotOnTargetPerShot((double) feedP.getShotOnTarget() / feedP.getShot() > avgShotOnTargetPerShot ? 1 : 2)
                .pass(feedP.getPass() > avgPass ? 1 : 2)
                .turnOverInOffense(feedP.getTurnOverInOffense() > avgOff ? 1 : 2)
                .turnOverInDefense(feedP.getTurnOverInDefense() > avgDef ? 1 : 2)
                .build();

    }

}
