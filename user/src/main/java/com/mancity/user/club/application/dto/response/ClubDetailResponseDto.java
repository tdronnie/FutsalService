package com.mancity.user.club.application.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClubDetailResponseDto {

    private String name;

    private Long masterId;

    private String masterNickname;

    private Long clubCourtId;

    private String emblem;

    private int memberCnt;

    private String region;

    private List<ClubMemberListResponseDto> participant;
}
