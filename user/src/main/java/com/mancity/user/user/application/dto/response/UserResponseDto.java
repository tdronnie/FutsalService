package com.mancity.user.user.application.dto.response;

import com.mancity.user.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class UserResponseDto {

    private Long id;

    private String nickName;

    private String email;

    private int height;

    private int weight;

    private int foot;

    private boolean isPlayer;

    public static UserResponseDto from(User user) {
        return UserResponseDto.builder()
                .id(user.getId())
                .nickName(user.getNickName())
                .email(user.getEmail())
                .height(user.getHeight())
                .weight(user.getWeight())
                .foot(user.getFoot())
                .isPlayer(user.isPlayer())
                .build();
    }

}
