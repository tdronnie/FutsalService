package com.mancity.user.domain;

import com.mancity.user.application.dto.request.UpdateRequestDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.ObjectUtils;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nickName;

    private String email;

    private String password;

    private String salt;

    private int height;

    private int weight;

    private int foot;

    private boolean isPlayer;

    private String fcmToken;

    public void updateFcmToken(String token) {
        this.fcmToken = token;
    }

    public void update(UpdateRequestDto dto) {
        if (!isEmpty(dto.getNickName())) {
            this.nickName = dto.getNickName();
        }

        if (!isEmpty(dto.getFoot())) {
            this.foot = dto.getFoot();
        }

        if (!isEmpty(dto.getHeight())) {
            this.height = dto.getHeight();
        }

        if (!isEmpty(dto.getWeight())) {
            this.weight = dto.getWeight();
        }

        if (!isEmpty(dto.isPlayer())) {
            this.isPlayer = dto.isPlayer();
        }
    }

    private boolean isEmpty(Object obj) {
        return ObjectUtils.isEmpty(obj);
    }
}
