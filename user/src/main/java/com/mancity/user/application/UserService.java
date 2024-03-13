package com.mancity.user.application;

import com.mancity.user.application.dto.request.FcmUpdateRequestDto;
import com.mancity.user.application.dto.request.LoginRequestDto;
import com.mancity.user.application.dto.request.SingUpRequestDto;
import com.mancity.user.application.dto.request.UpdateRequestDto;
import com.mancity.user.application.dto.response.UserResponseDto;
import com.mancity.user.domain.User;
import com.mancity.user.domain.repository.UserRepository;
import com.mancity.user.exception.PasswordNotMatchException;
import com.mancity.user.exception.UserNotExistException;
import com.mancity.user.infrastructure.util.PasswordEncoder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public void login(LoginRequestDto dto) {
        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(UserNotExistException::new);

        String inputPassword = PasswordEncoder.hashingPassword(dto.getPassword(), user.getSalt());
        if (isCorrectPassword(inputPassword, user.getPassword())) {
            // 토큰 생성 후 리턴 로직 넣어주시면 됩니다. ㅎ_ㅎ
            // 스프링 시큐리티 이용하는 경우 여기 말고 필터 기반이면 다르게 구현하시면 됩니다. ㅎ_ㅎ
            // token 생성 후 response dto는 구현 안되어있습니다.
            // 토큰이랑 유저 정보를 넘겨줘야 할 수도 ?
        }
    }

    public void signUp(SingUpRequestDto dto) {
        User user = dto.toEntity();
        // 해당 유저의 stat 생성 필요
        userRepository.save(user);
    }

    public void withdraw() { // 탈퇴
        // 타 서비스 구현 후 작성 필요
        // 얘가 가진거 다 삭제해줘야할 듯
    }

    public void updateInfo(UpdateRequestDto dto) {
        User user = userRepository.findById(dto.getId())
                .orElseThrow(UserNotExistException::new);
        user.update(dto);
    }

    public void updateFcmToken(FcmUpdateRequestDto dto) { // 완료
        User user = userRepository.findById(dto.getId()).orElseThrow(UserNotExistException::new);
        user.updateFcmToken(dto.getFcmToken());
    }

    public UserResponseDto findById(Long id) { // 완료
        User user = userRepository.findById(id).orElseThrow(UserNotExistException::new);
        return UserResponseDto.from(user);
    }

    public boolean isDuplicateEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public boolean isDuplicateNickName(String nickName) {
        return userRepository.existsByNickName(nickName);
    }

    private boolean isCorrectPassword(String inputPassword, String original) {
        if (!inputPassword.equals(original)) {
            throw new PasswordNotMatchException();
        }
        return true;
    }

}
