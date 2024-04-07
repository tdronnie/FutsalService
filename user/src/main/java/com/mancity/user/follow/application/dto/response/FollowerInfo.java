package com.mancity.user.follow.application.dto.response;

import com.mancity.user.stat.domain.MainStat;
import com.mancity.user.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FollowerInfo {

    private long userId;

    private String nickname;

    private String profileImage;

    private double overall;

    public static FollowerInfo of(User user){
        return FollowerInfo.builder()
                .userId(user.getId())
                .nickname(user.getNickName())
                .profileImage(user.getImage())                
                .overall(user.getMainStat().getOverall())
                .build();
    }
}
