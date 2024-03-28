package com.mancity.social.game.application.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TeamFeedbackResponseDto {

    private int possession; //점유율

    private int shot;

    private int pass;

    private int goal;

    private int activityLevel; //활동량

}
