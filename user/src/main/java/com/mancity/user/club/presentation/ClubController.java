package com.mancity.user.club.presentation;

import com.mancity.user.club.application.ClubService;
import com.mancity.user.club.application.dto.request.*;
import com.mancity.user.club.application.dto.response.ClubDetailResponseDto;
import com.mancity.user.club.application.dto.response.ClubResponseDto;
import com.mancity.user.club.application.dto.response.CreateResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user/club")
public class ClubController {

    private final ClubService clubService;

    @PostMapping("/create")
    public ResponseEntity<CreateResponseDto> create(@RequestPart(required = false) MultipartFile emblem, @RequestPart CreateRequestDto dto) {
        return new ResponseEntity<>(clubService.create(emblem, dto), HttpStatus.CREATED);
    }

    @PutMapping("/upload")
    public ResponseEntity<?> uploadEmblem(@RequestPart MultipartFile emblem, @RequestPart ClubEmblemUploadDto dto) {
        clubService.uploadEmblem(emblem, dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{clubId}")
    public ResponseEntity<ClubDetailResponseDto> clubDetail(@PathVariable(name = "clubId") Long id) {
        return new ResponseEntity<>(clubService.clubDetail(id), HttpStatus.OK);
    }

//    @GetMapping("/clubs")
//    public ResponseEntity<List<ClubResponseDto>> getClubsWithFilter(@RequestParam(required = false) String region) {
//        return new ResponseEntity<>(clubService.getClubsFilterByRegion(region), HttpStatus.OK);
//    }

    @GetMapping("/clubs")
    public ResponseEntity<List<ClubResponseDto>> getClubListDesc() {
        return new ResponseEntity<>(clubService.getClubListDesc(), HttpStatus.OK);
    }


}
