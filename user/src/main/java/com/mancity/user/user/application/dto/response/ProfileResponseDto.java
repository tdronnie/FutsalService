package com.mancity.user.user.application.dto.response;

import com.mancity.user.club.application.dto.response.ClubResponseDto;
import com.mancity.user.follow.application.dto.response.FollowResponseDto;
import com.mancity.user.stat.application.dto.response.LastStatResponseDto;
import com.mancity.user.stat.application.dto.response.MainStatResponseDto;
import com.mancity.user.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class ProfileResponseDto {

    private long id;

    private String image;

    private String nickName;

    private Long clubId;

    private ClubResponseDto club;

    private long follower;

    private long following;

    private boolean isPlayer;

    private MainStatResponseDto mainStat;

    private LastStatResponseDto lastStat;

    // private List<Srting> highlights;

    public static ProfileResponseDto of(User user, FollowResponseDto followDto) {
        return ProfileResponseDto.builder()
                .id(user.getId())
                .image(user.getImage())
                .nickName(user.getNickName())
                .clubId(findClub(user) == null ? null : findClub(user).getId())
                .club(findClub(user))
                .follower(followDto.getFollowers().size())
                .following(followDto.getFollowings().size())
                .isPlayer(user.isPlayer())
                .lastStat(LastStatResponseDto.from(user.getLastStat()))
                .mainStat(MainStatResponseDto.from(user.getMainStat()))
//                .highlights()
                .build();
    }

    private static ClubResponseDto findClub(User user) {
        if (!user.getClubMember().isEmpty()) {
            return ClubResponseDto.from(user.getClubMember().get(0).getClub());
        } else
            return null;
    }
}
