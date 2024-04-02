package com.mancity.user.club.application.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClubMemberListResponseDto {

    private Long id;

    private Long userId;

    private String image;
}
