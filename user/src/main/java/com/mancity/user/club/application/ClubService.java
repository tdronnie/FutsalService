package com.mancity.user.club.application;

import com.mancity.user.club.application.dto.request.ClubEmblemUploadDto;
import com.mancity.user.club.application.dto.request.CreateRequestDto;
import com.mancity.user.club.domain.Club;
import com.mancity.user.club.domain.repository.ClubRepository;
import com.mancity.user.club.exception.NoSuchClubException;
import com.mancity.user.club.infrastructure.file.util.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Transactional
public class ClubService {

    private final ClubRepository clubRepository;

    private final S3Uploader s3Uploader;

    public void create(MultipartFile file, CreateRequestDto dto) {
        if(file != null){
            String url = s3Uploader.uploadEmblem("emblem", file);
            Club club = dto.toEntity();
            club.uploadEmblem(url);
            clubRepository.save(club);
        }
        else{
            clubRepository.save(dto.toEntity());
        }
    }

    public void uploadEmblem(MultipartFile file, ClubEmblemUploadDto dto) {
        String url = s3Uploader.uploadEmblem("emblem", file);
        Club club = clubRepository.findById(dto.getId()).orElseThrow(NoSuchClubException::new);
        club.uploadEmblem(url);
    }

}
