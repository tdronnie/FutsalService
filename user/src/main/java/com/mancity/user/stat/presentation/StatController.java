package com.mancity.user.stat.presentation;

import com.mancity.user.stat.application.StatService;
import com.mancity.user.stat.application.dto.request.PlusRequestDto;
import com.mancity.user.stat.application.dto.response.StatAvgResponseDto;
import com.mancity.user.stat.application.dto.response.StatTotalResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user/stat")
public class StatController {

    private final StatService statService;

    // 스텟 누적
    @PostMapping("/plus")
    public ResponseEntity<?> plus(@RequestBody PlusRequestDto dto){
        statService.plus(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 경기당 평균 스텟 불러오기, 오각형 그거 아님
    @GetMapping("/avg/{id}")
    public ResponseEntity<StatAvgResponseDto> findAvgById(@PathVariable("id") Long id){
        return new ResponseEntity<>(statService.findAvgById(id), HttpStatus.OK);
    }

    @GetMapping("/total/{id}")
    public ResponseEntity<StatTotalResponseDto> findTotalById(@PathVariable("id") Long id){
        return new ResponseEntity<>(statService.findTotalById(id), HttpStatus.OK);
    }

    // 스텟 삭제
    // 어떤 클럽의 종합 스텟
    // 해당 매치의 종합 스텟
    // 경기당 스텟
}
