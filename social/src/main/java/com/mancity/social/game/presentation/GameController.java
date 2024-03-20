package com.mancity.social.game.presentation;

import com.mancity.social.game.application.GameService;
import com.mancity.social.game.application.dto.request.*;
import com.mancity.social.game.application.dto.response.GameResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/game")
@RequiredArgsConstructor
@Slf4j
public class GameController {

    private final GameService gameService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody GameCreateRequestDto dto) {
        gameService.create(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/upload")
    public ResponseEntity<GameResponseDto> upload(@RequestPart(value = "files", required = false) List<MultipartFile> files,
                                                  @RequestPart(value = "dto") GameVideoUploadDto dto) {
        GameResponseDto response = gameService.upload(files, dto);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<GameResponseDto> findMatchById(@PathVariable Long id) {
        GameResponseDto response = gameService.findMatchById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    ResponseEntity<List<GameResponseDto>> findAllByUserId(@PathVariable long id){
        return new ResponseEntity<>(gameService.findAllByUserId(id), HttpStatus.OK);
    }

    @PostMapping("/input")
    public ResponseEntity<?> inputDataFromCalc(@RequestBody GameDataInputDto dto){
        log.info("CALC SERVER : INPUT DATA {}", dto);
        gameService.inputData(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/allocate")
    public ResponseEntity<?> allocateData(@RequestBody GameDataAllocateDto dto){
        gameService.allocateData(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/match/check/{match}/{user}")
    public ResponseEntity<Boolean> checkManager(@PathVariable(name = "match") long matchId,
                                                @PathVariable(name = "user") long userId) {
        return new ResponseEntity<>(gameService.checkManager(CheckManagerDto.of(matchId, userId)), HttpStatus.OK);
    }

}
