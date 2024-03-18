package com.mancity.user.user.presentation;

import com.mancity.user.user.application.UserService;
import com.mancity.user.user.application.dto.request.*;
import com.mancity.user.user.application.dto.response.UserResponseDto;
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

    @PostMapping("/user/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDto dto) throws Exception {
        userService.login(dto); // 토큰 생성 후 리턴해주는 로직 필요
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/logout")
    public ResponseEntity<?> logout(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/user/signup")
    public ResponseEntity<?> signUp(@RequestBody SingUpRequestDto dto){
        userService.signUp(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/user/withdraw")
    public ResponseEntity<?> withdraw(){
        // 아직 미구현
        // 다른 서비스 생성 후 구현해야 할듯.
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/user/update")
    public ResponseEntity<?> updateInfo(@RequestBody UpdateRequestDto dto){
        userService.updateInfo(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/user/fcm")
    public ResponseEntity<?> updateFcmToken(@RequestBody FcmUpdateRequestDto dto){
        userService.updateFcmToken(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<UserResponseDto> findById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(userService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/user/check/email")
    public ResponseEntity<Boolean> isDuplicateEmail(@RequestBody DuplicateEmailCheckRequestDto dto){
        return new ResponseEntity<>(userService.isDuplicateEmail(dto), HttpStatus.OK);
    }

    @PostMapping("/user/check/nickname")
    public ResponseEntity<Boolean> isDuplicateNickName(@RequestBody DuplicateNickNameCheckRequestDto dto){
        return new ResponseEntity<>(userService.isDuplicateNickName(dto), HttpStatus.OK);
    }
}
