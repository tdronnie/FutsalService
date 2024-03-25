package com.mancity.user.alarm.application.dto.response;

import com.mancity.user.alarm.domain.Alarm;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class AlarmResponseDto {

    private long id;

    private long senderId;

    private long receiverId;

    public static AlarmResponseDto from(Alarm alarm){
        return AlarmResponseDto.builder()
                .id(alarm.getId())
                .senderId(alarm.getSenderId())
                .receiverId(alarm.getReceiverId())
                .build();
    }
}
