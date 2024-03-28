package com.mancity.social.user.application;

import com.mancity.social.user.application.dto.request.AlarmCreateDto;
import com.mancity.social.user.presentation.UserFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserService {

    private final UserFeignClient userFeignClient;

    public void generateAlarm(long senderId, long receiverId, String domain, long domainId){
        AlarmCreateDto alarmCreateDto = AlarmCreateDto.builder()
                .senderId(senderId)
                .receiverId(receiverId)
                .domain(domain)
                .domainId(domainId)
                .build();
        userFeignClient.alarm(alarmCreateDto);
    }
}
