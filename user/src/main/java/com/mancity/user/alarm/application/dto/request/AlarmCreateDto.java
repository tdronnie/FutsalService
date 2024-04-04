package com.mancity.user.alarm.application.dto.request;

import com.mancity.user.alarm.domain.Alarm;
import com.mancity.user.alarm.domain.AlarmDomain;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AlarmCreateDto {

    private long senderId;

    private long receiverId;

    private Long domainId; // 해당 알람이 어떤 요청일 때, id 값

    private String domain;

    public Alarm toEntity() {
        return Alarm.builder()
                .senderId(senderId)
                .receiverId(receiverId)
                .domainId(domainId)
                .domain(AlarmDomain.valueOf(domain))
                .title(AlarmDomain.valueOf(domain).generateTitle())
                .content(AlarmDomain.valueOf(domain).generateContent())
                .createDate(LocalDate.now())
                .build();
    }

    public static AlarmCreateDto of(long senderId, long receiverId, String domain, long domainId) {
        return AlarmCreateDto.builder()
                .senderId(senderId)
                .receiverId(receiverId)
                .domain(domain)
                .domainId(domainId)
                .build();
    }
}
