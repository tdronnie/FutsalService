package com.mancity.user.alarm.application.dto.request;

import com.mancity.user.alarm.domain.Alarm;
import com.mancity.user.alarm.domain.AlarmDomain;
import com.mancity.user.alarm.domain.AlarmText;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AlarmCreateDto {

    private long senderId;

    private long receiverId;

    private Long domainId; // 해당 알람이 어떤 요청일 때, id 값

    private String domain;

    public Alarm toEntity(){
        return Alarm.builder()
                .senderId(senderId)
                .receiverId(receiverId)
                .domainId(domainId)
                .domain(AlarmDomain.valueOf(domain))
                .title(AlarmDomain.valueOf(domain).generateTitle())
                .content(AlarmDomain.valueOf(domain).generateContent())
                .build();
    }

}