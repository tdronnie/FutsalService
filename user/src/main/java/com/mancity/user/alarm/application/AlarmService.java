package com.mancity.user.alarm.application;

import com.mancity.user.alarm.application.dto.request.AlarmCreateDto;
import com.mancity.user.alarm.application.dto.response.AlarmResponseDto;
import com.mancity.user.alarm.domain.Alarm;
import com.mancity.user.alarm.domain.repository.AlarmRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AlarmService {

    private final AlarmRepository alarmRepository;

    public void createAlarm(AlarmCreateDto dto) {
        alarmRepository.save(dto.toEntity());
    }

    public List<AlarmResponseDto> findAllByUserId(long id) {
        return alarmRepository.findAllByReceiverId(id)
                .stream()
                .map(AlarmResponseDto::from)
                .toList();
    }

}
