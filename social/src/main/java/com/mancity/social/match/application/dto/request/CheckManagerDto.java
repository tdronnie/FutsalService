package com.mancity.social.match.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CheckManagerDto {

    private long matchId;

    private long userId;

    public static CheckManagerDto of(long matchId, long userId){
        return CheckManagerDto.builder()
                .matchId(matchId)
                .userId(userId)
                .build();
    }

}
