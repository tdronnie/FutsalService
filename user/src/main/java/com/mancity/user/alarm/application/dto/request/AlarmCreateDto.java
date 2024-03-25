package com.mancity.user.alarm.application.dto.request;

import com.mancity.user.alarm.domain.Alarm;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AlarmCreateDto {

    private long senderId;

    private long receiverId;

    public Alarm toEntity(){
        return Alarm.builder()
                .senderId(senderId)
                .receiverId(receiverId)
                .build();
    }
}
