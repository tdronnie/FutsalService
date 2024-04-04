package com.mancity.user.user.application.dto.response;

import com.mancity.user.follow.application.dto.request.UnfollowSendRequestDto;
import com.mancity.user.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class UserSearchResponseDto {

    private long userId;

    private String nickname;

    private String email;

    public static UserSearchResponseDto from(User user){
        return UserSearchResponseDto.builder()
                .userId(user.getId())
                .nickname(user.getNickName())
                .email(user.getEmail())
                .build();
    }
}
