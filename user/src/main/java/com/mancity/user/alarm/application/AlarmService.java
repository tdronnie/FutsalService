package com.mancity.user.alarm.application;

import com.mancity.user.alarm.application.dto.request.AlarmCreateDto;
import com.mancity.user.alarm.application.dto.request.FCMDto;
import com.mancity.user.alarm.application.dto.response.AlarmResponseDto;
import com.mancity.user.alarm.domain.Alarm;
import com.mancity.user.alarm.domain.AlarmDomain;
import com.mancity.user.alarm.domain.repository.AlarmRepository;
import com.mancity.user.alarm.infrastructure.fcm.util.FCMSender;
import com.mancity.user.user.domain.User;
import com.mancity.user.user.domain.repository.UserRepository;
import com.mancity.user.user.exception.UserNotExistException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AlarmService {

    private final AlarmRepository alarmRepository;

    private final UserRepository userRepository;

    private final FCMSender fcmSender;

    public void createAlarm(AlarmCreateDto dto) {
        Alarm alarm = dto.toEntity();
        log.info("createAlarm : INPUT DOMAIN -> {}", dto.getDomain());
        if(AlarmDomain.valueOf(dto.getDomain()).isNeedNickName()){
            log.info("createAlarm : nickname 필요 -> {}", AlarmDomain.valueOf(dto.getDomain()));
            String nickname = userRepository.findNickNameById(dto.getSenderId());
            alarm.updateTitle(nickname);
        }
        User user = userRepository.findById(dto.getReceiverId()).orElseThrow(UserNotExistException::new);
        alarmRepository.save(alarm);
        // alarm FCM 호출
        FCMDto fcmDto = FCMDto.of(user,alarm);
        fcmSender.sendFCM(fcmDto);
    }

    public List<AlarmResponseDto> findAllByUserId(long id) {
        return alarmRepository.findAllByReceiverIdOrderByIdDesc(id)
                .stream()
                .map(AlarmResponseDto::from)
                .toList();
    }

}
