package com.mancity.user.alarm.application.dto.response;

import com.mancity.user.alarm.domain.Alarm;
import com.mancity.user.alarm.domain.AlarmDomain;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class AlarmResponseDto {

    private Long id;

    private long senderId;

    private long receiverId;

    private Long domainId;

    private AlarmDomain domain;

    private String title;

    private String content;

    private LocalDate createDate;

    public static AlarmResponseDto from(Alarm alarm){
        return AlarmResponseDto.builder()
                .id(alarm.getId())
                .senderId(alarm.getSenderId())
                .receiverId(alarm.getReceiverId())
                .domain(alarm.getDomain())
                .domainId(alarm.getDomainId())
                .title(alarm.getTitle())
                .content(alarm.getContent())
                .createDate(alarm.getCreateDate())
                .build();
    }

}
