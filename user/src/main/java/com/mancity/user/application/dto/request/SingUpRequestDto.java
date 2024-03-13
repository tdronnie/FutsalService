package com.mancity.user.application.dto.request;

import com.mancity.user.domain.User;
import com.mancity.user.infrastructure.util.PasswordEncoder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class SingUpRequestDto {

    private String nickName;

    private String email;

    private String password;

    private int height;

    private int weight;

    private int foot;

    public User toEntity() {
        String salt = PasswordEncoder.generateSalt();
        return User.builder()
                .nickName(nickName)
                .email(email)
                .password(PasswordEncoder.hashingPassword(password, salt))
                .salt(salt)
                .height(height)
                .weight(weight)
                .foot(foot)
                .isPlayer(false)
                .password(PasswordEncoder.hashingPassword(password, salt))
                .build();
    }

}