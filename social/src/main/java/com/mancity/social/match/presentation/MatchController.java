package com.mancity.social.match.presentation;

import com.mancity.social.match.application.MatchService;
import com.mancity.social.match.application.dto.request.CheckManagerDto;
import com.mancity.social.match.application.dto.request.MatchCreateRequestDto;
import com.mancity.social.match.application.dto.request.MatchDataInputDto;
import com.mancity.social.match.application.dto.request.MatchVideoUploadDto;
import com.mancity.social.match.application.dto.response.MatchResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/match")
@RequiredArgsConstructor
public class MatchController {

    private final MatchService matchService;

    // 매치 생성
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody MatchCreateRequestDto dto) {
        matchService.create(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // 동영상 업로드
    @PutMapping("/upload")
    public ResponseEntity<MatchResponseDto> upload(@RequestPart(value = "files", required = false) List<MultipartFile> files,
                                                   @RequestPart(value = "dto") MatchVideoUploadDto dto) {
        MatchResponseDto response = matchService.upload(files, dto);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MatchResponseDto> findMatchById(@PathVariable Long id) {
        MatchResponseDto response = matchService.findMatchById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    ResponseEntity<List<MatchResponseDto>> findAllByUserId(@PathVariable long id){
        return new ResponseEntity<>(matchService.findAllByUserId(id), HttpStatus.OK);
    }
    // 매치 분석 완료 후 데이터 할당 -> 팀데이터, 개인데이터에 각각 저장


    // calc 에서 완료 후 보내줄 api
    @PostMapping("/input")
    public ResponseEntity<?> inputData(@RequestBody MatchDataInputDto dto){
        matchService.inputData(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 개인데이터 guest 인것 할당
    /** input : post, 개인 닉네임, 매치 아이디, 팀 구분, 플레이어 번호
     * logic : match 조회 후 닉네임을 해당 match 의 팀 - 플레이어의 string name 에 할당
     * output : 200 OK
     * */

    // 팀 피드백

    // 매치장 유저확인
    @PostMapping("/match/check/{match}/{user}")
    public ResponseEntity<Boolean> checkManager(@PathVariable(name = "match") long matchId,
                                                @PathVariable(name = "user") long userId) {
        return new ResponseEntity<>(matchService.checkManager(CheckManagerDto.of(matchId, userId)), HttpStatus.OK);
    }

    // 매치 조회

    // 회원별 참여한 매치 조회
}
