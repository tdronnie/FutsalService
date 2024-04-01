package com.mancity.user.follow.application.dto.request;

import com.mancity.user.follow.domain.Follow;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class FollowSendRequestDto {

    private long senderId;

    private long receiverId;

    public Follow toEntity(){
        return Follow.builder()
                .senderId(senderId)
                .receiverId(receiverId)
                .build();
    }
}
