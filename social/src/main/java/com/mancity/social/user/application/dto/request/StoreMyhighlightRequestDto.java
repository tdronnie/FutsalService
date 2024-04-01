package com.mancity.social.user.application.dto.request;


import com.mancity.social.highlight.domain.Myhighlight;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StoreMyhighlightRequestDto {

    private Myhighlight myhighlight;

    private Long userId;
}
