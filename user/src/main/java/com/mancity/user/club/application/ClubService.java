package com.mancity.user.club.application;

import com.mancity.user.club.application.dto.request.DuplicateNameCheckRequestDto;
import com.mancity.user.club.application.dto.response.CreateResponseDto;
import com.mancity.user.clubmember.domain.ClubMember;
import com.mancity.user.club.application.dto.request.ClubEmblemUploadDto;
import com.mancity.user.club.application.dto.request.CreateRequestDto;
import com.mancity.user.club.application.dto.response.ClubDetailResponseDto;
import com.mancity.user.club.application.dto.response.ClubResponseDto;
import com.mancity.user.club.domain.Club;
import com.mancity.user.club.domain.repository.ClubRepository;
import com.mancity.user.club.exception.NoSuchClubException;
import com.mancity.user.common.s3.util.S3Uploader;
import com.mancity.user.user.domain.User;
import com.mancity.user.user.domain.repository.UserRepository;
import com.mancity.user.user.exception.UserNotExistException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ClubService {

    private final ClubRepository clubRepository;

    private final UserRepository userRepository;

    private final S3Uploader s3Uploader;

    public CreateResponseDto create(MultipartFile file, CreateRequestDto dto) {
//        Club club = dto.toEntity();
        //클럽장 클럽멤버에 포함
        User user = userRepository.findById(dto.getId()).orElseThrow(UserNotExistException::new);
        Club Dupclub = clubRepository.findByName(dto.getName());
        if (Dupclub != null) {
            throw new DuplicateNameCheckRequestDto();
        }
        else{
            Club club = dto.toEntity();
            ClubMember masterMember = ClubMember.builder()
                .club(club)
                .user(user)
                .build();

            club.addMasterInClubMember(masterMember);

            if (file != null) {
                String url = s3Uploader.uploadEmblem("emblem", file);
                club.uploadEmblem(url);
            }
            clubRepository.save(club);

            return CreateResponseDto.builder()
                    .clubId(club.getId())
                    .build();
        }
    }

    public void uploadEmblem(MultipartFile file, ClubEmblemUploadDto dto) {
        String url = s3Uploader.uploadEmblem("emblem", file);
        Club club = clubRepository.findById(dto.getId()).orElseThrow(NoSuchClubException::new);
        club.uploadEmblem(url);
    }

    public ClubDetailResponseDto clubDetail(Long id) {
        Club club = clubRepository.findById(id).orElseThrow(NoSuchClubException::new);
        return ClubDetailResponseDto.builder()
                .name(club.getName())
                .emblem(club.getEmblem())
                .memberCnt(club.getMemberCnt())
                .region(club.getRegion())
                .build();
    }

    public List<ClubResponseDto> getClubListDesc() {
        List<Club> clubs = clubRepository.findAllByIdDesc();

        List<ClubResponseDto> list = new ArrayList<>();

        for (Club c : clubs) {
            ClubResponseDto dto = ClubResponseDto.builder()
                    .id(c.getId())
                    .name(c.getName())
                    .emblem(c.getEmblem())
                    .memberCnt(c.getMemberCnt())
                    .region(c.getRegion())
                    .build();

            list.add(dto);
        }
        return list;

    }

    public List<ClubResponseDto> getClubsFilterByRegion(String region) {

        List<Club> clubs;
        if (region != null && !region.isEmpty()) {
            clubs = clubRepository.findAllByRegion(region);
        }
        else{
            clubs = clubRepository.findAll();
        }
        List<ClubResponseDto> list = new ArrayList<>();

        for (Club c : clubs) {
            ClubResponseDto dto = ClubResponseDto.builder()
                    .id(c.getId())
                    .name(c.getName())
                    .emblem(c.getEmblem())
                    .memberCnt(c.getMemberCnt())
                    .region(c.getRegion())
                    .build();

            list.add(dto);
        }
        return list;

    }

}
