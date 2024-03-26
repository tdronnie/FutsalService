package com.mancity.user.follow.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class UnfollowSendRequestDto {

    private long senderId; // 언팔로우 시도 하는 사람

    private long receiverId; // 언팔로우 당할 사람

}
