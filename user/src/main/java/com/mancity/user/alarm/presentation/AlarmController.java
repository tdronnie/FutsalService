package com.mancity.user.alarm.presentation;

import com.mancity.user.alarm.application.AlarmService;
import com.mancity.user.alarm.application.dto.request.AlarmCreateDto;
import com.mancity.user.alarm.application.dto.response.AlarmResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user/alarm")
@RequiredArgsConstructor
@Slf4j
public class AlarmController {

    private final AlarmService alarmService;

    @PostMapping("/create")
    public ResponseEntity<?> createAlarm(@RequestBody AlarmCreateDto dto) {
        log.info("Alarm - 알람 생성 요청 : {}", dto);
        alarmService.createAlarm(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}") // 본인 알람 조회, receiver 가 id 인거 찾으면 될듯
    public ResponseEntity<List<AlarmResponseDto>> findAllByUserId(@PathVariable("id") long id) {
        log.info("Alarm - 알람 조회 요청 : {}", id);
        return new ResponseEntity<>(alarmService.findAllByUserId(id), HttpStatus.OK);

    }
}
