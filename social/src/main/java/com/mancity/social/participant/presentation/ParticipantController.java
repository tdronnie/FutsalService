package com.mancity.social.participant.presentation;


import com.mancity.social.participant.application.dto.request.GameManagerResponseDto;
import com.mancity.social.participant.application.dto.request.GameParticipateRequestDto;
import com.mancity.social.participant.application.ParticipantService;
import com.mancity.social.participant.application.dto.respose.ParticipantResponseDto;
import com.mancity.social.participant.application.dto.respose.ParticipateRequestResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/social/participant")
public class ParticipantController {

    private final ParticipantService participantService;

    @PostMapping("/request")
    public ResponseEntity<?> requestParticipate(@RequestBody GameParticipateRequestDto dto){
        participantService.requestParticipate(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/response")
    public ResponseEntity<?> responseParticipate(@RequestBody GameManagerResponseDto dto){
        participantService.responseParticipate(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 현재 참여자 조회
    @GetMapping("/{id}")
    public ResponseEntity<List<ParticipantResponseDto>> findParticipantsByGameId(@PathVariable("id") long id){
        return new ResponseEntity<>(participantService.findParticipantsByGameId(id), HttpStatus.OK);
    }

    // 해당매치의 참여요청조회
    @GetMapping("/request/{id}")
    public ResponseEntity<List<ParticipateRequestResponseDto>> findRequestsByGameId(@PathVariable("id") long id){
        return new ResponseEntity<>(participantService.findRequestsByGameId(id), HttpStatus.OK);
    }
}
