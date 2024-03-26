package com.mancity.user.alarm.application;

import com.mancity.user.alarm.application.dto.request.AlarmCreateDto;
import com.mancity.user.alarm.application.dto.response.AlarmResponseDto;
import com.mancity.user.alarm.domain.Alarm;
import com.mancity.user.alarm.domain.AlarmDomain;
import com.mancity.user.alarm.domain.repository.AlarmRepository;
import com.mancity.user.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AlarmService {

    private final AlarmRepository alarmRepository;

    private final UserRepository userRepository;

    public void createAlarm(AlarmCreateDto dto) {
        Alarm alarm = dto.toEntity();
        log.info("createAlarm : INPUT DOMAIN -> {}", dto.getDomain());
        if(AlarmDomain.valueOf(dto.getDomain()).isNeedNickName()){
            log.info("createAlarm : nickname 필요 -> {}", AlarmDomain.valueOf(dto.getDomain()));
            String nickname = userRepository.findNickNameById(dto.getSenderId());
            alarm.updateTitle(nickname);
        }
        alarmRepository.save(alarm);
    }

    public List<AlarmResponseDto> findAllByUserId(long id) {
        return alarmRepository.findAllByReceiverId(id)
                .stream()
                .map(AlarmResponseDto::from)
                .toList();
    }

}
