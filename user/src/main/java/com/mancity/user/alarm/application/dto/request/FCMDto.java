package com.mancity.user.alarm.application.dto.request;

import com.mancity.user.alarm.domain.Alarm;
import com.mancity.user.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class FCMDto {

    private String fcmToken;

    private String title;

    private String body;

    public static FCMDto of(User user, Alarm alarm) {
        return FCMDto.builder()
                .fcmToken(user.getFcmToken())
                .title(alarm.getTitle())
                .body(alarm.getContent())
                .build();
    }
}
