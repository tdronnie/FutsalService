package com.mancity.social.game.presentation;

import com.mancity.social.flask.application.FlaskService;
import com.mancity.social.game.application.GameService;
import com.mancity.social.game.application.dto.request.*;
import com.mancity.social.game.application.dto.response.GameMainResponseDto;
import com.mancity.social.game.application.dto.response.GameResponseDto;
import com.mancity.social.game.application.dto.response.PlayerDataResponseDto;
import com.mancity.social.game.application.dto.response.TeamDataResponseDto;
import com.mancity.social.game.application.dto.response.*;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/social/game")
@RequiredArgsConstructor
@Slf4j
public class GameController {

    private final GameService gameService;

    private final FlaskService flaskService;

    @PostMapping("/create")
    @Operation(summary = "매치 생성", description = "매치를 생성합니다.")
    public ResponseEntity<Long> create(@RequestBody GameCreateRequestDto dto) {
        return new ResponseEntity<>(gameService.create(dto), HttpStatus.CREATED);
    }

    @PutMapping("/upload")
    @Operation(summary = "동영상 업로드", description = "경기 동영상 업로드 API")
    public ResponseEntity<GameResponseDto> upload(@RequestPart(value = "files", required = false) List<MultipartFile> files,
                                                  @RequestPart(value = "dto") GameVideoUploadDto dto) {
        GameResponseDto response = gameService.upload(files, dto);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/calculate/{id}")
    @Operation(summary = "임시 분석 요청", description = "업로된 동영상을 통해 분석을 요청하는 API")
    public ResponseEntity<?> calculate(@PathVariable("id") long id){
        log.info("FLASK CALL REQUEST START ... ");
        flaskService.callTrackingAsync(id);
        log.info("FLASK CALL REQUEST END !!! ");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "게임 전체 상세 조회", description = "id 를 통해서 매치 정보 가져오는 API, 해당 게임 관련 정보랑 데이터는 다 가져온다.")
    public ResponseEntity<GameResponseDto> findMatchById(@PathVariable Long id) {
        GameResponseDto response = gameService.findMatchById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // team data
    @GetMapping("/data/team/{id}")
    @Operation(summary = "게임 팀데이터 조회", description = "해당 게임 id로 Team A, Team B 조회 API")
    public ResponseEntity<TeamDataResponseDto> findTeamDataByGameId(@PathVariable Long id) {
        TeamDataResponseDto response = gameService.findTeamDataByGameId(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // player data
    @GetMapping("/data/player/{id}")
    @Operation(summary = "게임 선수 데이터 조회", description = "게임 id로 해당 게임의 Team A의 선수데이터, Team B의 선수데이터 조회 API. 할당되지 않은 유저는 GUEST로 나올거고, 할당되어 있으면 해당 유저의 nickname 으로 보여집니다.")
    public ResponseEntity<PlayerDataResponseDto> findPlayerDataByGameId(@PathVariable Long id) {
        PlayerDataResponseDto response = gameService.findPlayerDataByGameId(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/allocated/{id}")
    @Operation(summary = "유저 별 데이터를 할당받은 매치 목록", description = "유저 id로 참가한 게임 중, 데이터 할당을 받은 매치 목록을 보여주는 API")
        // 회원별 데이터를 할당 받은 매치 목록
    ResponseEntity<List<GameResponseDto>> findAllocatedByUserId(@PathVariable long id) {
        return new ResponseEntity<>(gameService.findAllByUserId(id), HttpStatus.OK);
    }

    @GetMapping("/participated/{id}") // 회원별 참여 상태인 매치 목록
    @Operation(summary = "회원별 참여 상태인 매치 목록", description = "유저 ID로 참가한 매치 목록")
    ResponseEntity<List<GameResponseDto>> findGamesByParticipantUserId(@PathVariable long id) {
        return new ResponseEntity<>(gameService.findGamesByParticipantUserId(id), HttpStatus.OK);
    }

    @GetMapping("/participated/{id}") // 회원별 참여 상태인 매치 목록
    @Operation(summary = "회원별 참여 상태인 매치 목록", description = "유저 ID로 참가한 매치 목록")
    ResponseEntity<List<GameManagerMatchResponseDto>> findGamesByIdMatchManager(@PathVariable long id) {
        return new ResponseEntity<>(gameService.findGamesByIdMatchManager(id), HttpStatus.OK);
    }

    @PostMapping("/input")
    @Operation(summary = "Calc 서버에서 데이터 기록 산출 완료 후 호출하는 API", description = "형은 넘어가시면 됩니다 ㅎ_ㅎ")
    public ResponseEntity<?> inputDataFromCalc(@RequestBody GameDataInputDto dto) {
        log.info("CALC SERVER : INPUT DATA {}", dto);
        gameService.inputData(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/allocate")
    @Operation(summary = "경기 데이터 유저 할당 API", description = "할당해줄 유저의 ID 와, 할당해줄 플레이어 데이터의 ID로 할당합니다.")
    public ResponseEntity<?> allocateData(@RequestBody GameDataAllocateDto dto) {
        log.info("데이터 할당 CALL, OPEN");
        gameService.allocateData(dto);
//        gameService.allocateDataAsync(dto);
        log.info("데이터 할당 CLOSE");

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/check/{game}/{user}")
    @Operation(summary = "해당 유저가 해당 게임의 매니저인지 여부 확인", description = "매치장일 때 보여지는 페이지가 다르기 때문에, 매니저(매치장)여부 확인하기 위한 메소드 입니다")
    public ResponseEntity<Boolean> checkManager(@PathVariable(name = "game") long gameId,
                                                @PathVariable(name = "user") long userId) {
        return new ResponseEntity<>(gameService.checkManager(CheckManagerDto.of(gameId, userId)), HttpStatus.OK);
    }

    @GetMapping("/filter")
    @Operation(summary = "필터를 통한 매치 리스트 조회 API", description = "성별, 인원수, 레벨, 지역 매치 리스트 조회 API인데, 모두 nullable 이어서 필요한 값만 쿼리스트링에 담아서 보내면 됩니다.")
    public ResponseEntity<List<GameDetailResponseDto>> findAllGamesByFilters(@RequestParam(required = false) Integer gender,
                                                                       @RequestParam(required = false) String startDate,
                                                                       @RequestParam(required = false) Integer playernumber,
                                                                       @RequestParam(required = false) String level) {
        List<GameDetailResponseDto> dtos = gameService.findAllByFilters(gender, LocalDate.parse(startDate), playernumber, level);
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @GetMapping("/main/{id}")
    @Operation(summary = "내가 참여한 경기 중, 분석이 왼료된 게임 리스트 조회", description = "메인페이지에 필요하다 하셔서 보냅니다.")
    public ResponseEntity<List<GameMainResponseDto>> findMyGameOver(@PathVariable("id") long id) {
        log.info("MAIN PAGE - 분석 완료된 게임 리스트 조회 : {}", id);
        return new ResponseEntity<>(gameService.findMyGameOver(id), HttpStatus.OK);
    }

    @PutMapping("/calcOver/{id}")
    @Operation(summary = "Calc에서 사용할 게임의 분석 완료 상태 여부 업데이트 조회", description = "calc에서 쓸거라 넘어가시면 됩니다 ㅎㅎ")
    public ResponseEntity<?> calcOver(@PathVariable("id") long id) {
        gameService.updateCalcStatus(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/feedback/team/{id}")
    @Operation(summary = "팀 피드백 API", description = "팀 피드백 API 인가봐요 세은이가 짬")
    public ResponseEntity<TeamFeedbackResponseDto> getTeamsResultData(@PathVariable Long id) {
        return new ResponseEntity<>(gameService.getTeamsFeedback(id), HttpStatus.OK);

    }

    @GetMapping("/feedback/player/{game}/{player}")
    @Operation(summary = "선수 피드백 API", description = "선수 피드백 API 인가봐요 세은이가 짬")
    public ResponseEntity<PlayerFeedBackResponseDto> getPlayerResultData(@PathVariable("game") Long gameId, @PathVariable("player") Long playerId) {
        return new ResponseEntity<>(gameService.getPersonalFeedBack(gameId, playerId), HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    @Operation(summary = "매치 정보 조회 API", description = "성호`s 매치의 정보에 해당하는 것만 조회하는 API")
    public ResponseEntity<GameDetailResponseDto> findGameDetails(@PathVariable("id") long id) {
        return new ResponseEntity<>(gameService.findGameDetails(id), HttpStatus.OK);
    }
}
