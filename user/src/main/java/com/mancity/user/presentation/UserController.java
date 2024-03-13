package com.mancity.user.presentation;

import com.mancity.user.application.UserService;
import com.mancity.user.application.dto.request.FcmUpdateRequestDto;
import com.mancity.user.application.dto.request.LoginRequestDto;
import com.mancity.user.application.dto.request.SingUpRequestDto;
import com.mancity.user.application.dto.request.UpdateRequestDto;
import com.mancity.user.application.dto.response.UserResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;

    @PostMapping("/user/login") // 완
    public ResponseEntity<?> login(@RequestBody LoginRequestDto dto) throws Exception {
        userService.login(dto); // 토큰 생성 후 리턴해주는 로직 필요
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/user/signup")
    public ResponseEntity<?> signUp(@RequestBody SingUpRequestDto dto){
        userService.signUp(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/user/withdraw")
    public ResponseEntity<?> withdraw(){ // 탈퇴
        // 아직 미구현
        // 다른 서비스 생성 후 구현해야 할듯.
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/user/update")
    public ResponseEntity<?> updateInfo(@RequestBody UpdateRequestDto dto){
        userService.updateInfo(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/user/fcm") // 완
    public ResponseEntity<?> updateFcmToken(@RequestBody FcmUpdateRequestDto dto){
        userService.updateFcmToken(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/{id}") // 완
    public ResponseEntity<UserResponseDto> findById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(userService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/user/check/email")
    public ResponseEntity<Boolean> isDuplicateEmail(@RequestBody String email){
        return new ResponseEntity<>(userService.isDuplicateEmail(email), HttpStatus.OK);
    }

    @PostMapping("/user/check/nickname")
    public ResponseEntity<Boolean> isDuplicateNickName(@RequestBody String nickName){
        return new ResponseEntity<>(userService.isDuplicateNickName(nickName), HttpStatus.OK);
    }
}
