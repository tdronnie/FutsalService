package com.mancity.user.club.presentation;

import com.mancity.user.club.application.ClubService;
import com.mancity.user.club.application.dto.request.ClubEmblemUploadDto;
import com.mancity.user.club.application.dto.request.CreateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user/club")
public class ClubController {

    private final ClubService clubService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestPart(required = false)MultipartFile emblem, @RequestPart CreateRequestDto dto) {
        clubService.create(emblem, dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/upload")
    public ResponseEntity<?> uploadEmblem(@RequestPart MultipartFile emblem, @RequestPart ClubEmblemUploadDto dto) {
        clubService.uploadEmblem(emblem, dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @PatchMapping("/join/{id}")
//    public ResponseEntity<?> joinMember(@PathVariable(name = "id") Long userId){
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//    @PatchMapping("/quit/{id}")
//    public ResponseEntity<?> quitMember(@PathVariable(name = "id") Long userId){
//        return new ResponseEntity<>(HttpStatus.OK);
//    }


}
