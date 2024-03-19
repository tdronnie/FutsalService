package com.mancity.social.match.application;

import com.mancity.social.match.application.dto.request.CheckManagerDto;
import com.mancity.social.match.application.dto.request.MatchCreateRequestDto;
import com.mancity.social.match.application.dto.request.MatchDataInputDto;
import com.mancity.social.match.application.dto.request.MatchVideoUploadDto;
import com.mancity.social.match.application.dto.response.MatchResponseDto;
import com.mancity.social.match.application.dto.response.UserResponseDto;
import com.mancity.social.match.domain.Match;
import com.mancity.social.match.domain.repository.MatchRepository;
import com.mancity.social.match.infrastructure.file.util.S3Uploader;
import com.mancity.social.match.presentation.UserFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class MatchService {

    private final MatchRepository matchRepository;

    private final S3Uploader uploader;

    private final UserFeignClient userFeignClient;

    public void create(MatchCreateRequestDto dto) {
        matchRepository.save(dto.toEntity());
    }

    public MatchResponseDto upload(List<MultipartFile> files, MatchVideoUploadDto dto) {
        List<String> url = uploader.uploadVideo("match", files);
        Match match = findById(dto.getId());
        match.uploadVideo(url.get(0));

        // 업로드 완료 시, flask에 업로드 완료에 대해 call
        return MatchResponseDto.from(match);
    }

    public MatchResponseDto findMatchById(Long id) {
        Match match = findById(id);
        return MatchResponseDto.from(match);
    }

    public boolean checkManager(CheckManagerDto dto) {
        Match match = findById(dto.getMatchId());
        return match.getManager() == dto.getUserId();
    }

    public void inputData(MatchDataInputDto dto) {
        Match match = findById(dto.getMatchId());
        match.inputData(dto);
    }

    public List<MatchResponseDto> findAllByUserId(long id) {
        // user 에서 id를 통해 nickname을 가져온 후, 해당 nickname이 속한 match 의 정보들을 전부 리턴
        String nickname = userFeignClient.findById(id).getNickName();
        List<Match> matches = matchRepository.findAllByNickname(nickname);
        return matches.stream()
                .map(MatchResponseDto::from)
                .toList();
    }

    private Match findById(long id) {
        return matchRepository.findById(id)
                .orElseThrow();
    }
}
