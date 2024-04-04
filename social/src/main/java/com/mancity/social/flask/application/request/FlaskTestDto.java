package com.mancity.social.flask.application.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class FlaskTestDto {

    private String url;

    private long game_id;
}
