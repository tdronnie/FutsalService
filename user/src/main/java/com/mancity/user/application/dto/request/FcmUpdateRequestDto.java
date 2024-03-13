package com.mancity.user.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class FcmUpdateRequestDto {

    private Long id;

    private String fcmToken;
}
