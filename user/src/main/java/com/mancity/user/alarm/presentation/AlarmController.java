package com.mancity.user.alarm.presentation;

import com.mancity.user.alarm.application.AlarmService;
import com.mancity.user.alarm.application.dto.request.AlarmCreateDto;
import com.mancity.user.alarm.application.dto.response.AlarmResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user/alarm")
@RequiredArgsConstructor
public class AlarmController {

    private final AlarmService alarmService;

    @PostMapping("/create")
    public ResponseEntity<?> createAlarm(@RequestBody AlarmCreateDto dto){
        alarmService.createAlarm(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}") // 본인 알람 조회, receiver 가 id 인거 찾으면 될듯
    public ResponseEntity<List<AlarmResponseDto>> findAllByUserId(@PathVariable("id") long id){
        return new ResponseEntity<>(alarmService.findAllByUserId(id), HttpStatus.OK);

    }
}
