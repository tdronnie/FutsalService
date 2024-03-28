package com.mancity.social.user.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AlarmCreateDto {

    private long senderId;

    private long receiverId;

    private Long domainId; // 해당 알람이 어떤 요청일 때, id 값

    private String domain;

}
