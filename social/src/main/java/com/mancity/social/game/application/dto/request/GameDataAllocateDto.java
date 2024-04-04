package com.mancity.social.game.application.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GameDataAllocateDto {

    private long gamePlayerId;

    private long userId;

}
