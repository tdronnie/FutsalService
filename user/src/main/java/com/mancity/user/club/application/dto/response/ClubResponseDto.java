package com.mancity.user.club.application.dto.response;

import com.mancity.user.club.domain.Club;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClubResponseDto {

    private Long id;

    private Long clubCourtId;

    private String name;

    private String emblem;

    private int memberCnt;

    private int score;

    private String region;

    public static ClubResponseDto from(Club club) {
        return ClubResponseDto.builder()
                .name(club.getName())
                .clubCourtId(club.getClubCourtId())
                .emblem(club.getEmblem())
                .memberCnt(club.getMemberCnt())
                .region(club.getRegion())
                .build();
    }
}
