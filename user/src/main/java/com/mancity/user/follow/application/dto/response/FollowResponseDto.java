package com.mancity.user.follow.application.dto.response;

import com.mancity.user.follow.application.dto.request.FollowSendRequestDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FollowResponseDto {

    List<FollowerInfo> followers;
    List<FollowerInfo> followings;

    public static FollowResponseDto of(List<FollowerInfo> followers, List<FollowerInfo> followings){
        return FollowResponseDto.builder()
                .followers(followers)
                .followings(followings)
                .build();
    }
}
