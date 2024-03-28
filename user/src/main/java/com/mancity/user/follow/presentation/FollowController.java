package com.mancity.user.follow.presentation;

import com.mancity.user.follow.application.FollowService;
import com.mancity.user.follow.application.dto.request.FollowSendRequestDto;
import com.mancity.user.follow.application.dto.request.UnfollowSendRequestDto;
import com.mancity.user.follow.application.dto.response.FollowResponseDto;
import com.mancity.user.follow.application.dto.response.FollowerInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user/follow")
public class FollowController {

    private final FollowService followService;

    @PostMapping("/send")
    public ResponseEntity<?> follow(@RequestBody FollowSendRequestDto dto){
        followService.follow(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/unfollow")
    public ResponseEntity<?> unfollow(@RequestBody UnfollowSendRequestDto dto){
        followService.unfollow(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}") // 팔로잉, 팔로워 전체 조회
    public ResponseEntity<FollowResponseDto> findFollowersAndFollowings(@PathVariable("id") long id){
        FollowResponseDto dto = followService.findFollowersAndFollowings(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/followers/{id}") // 팔로잉, 팔로워 전체 조회
    public ResponseEntity<List<FollowerInfo>> findMyFollowers(@PathVariable("id") long id){
        List<FollowerInfo> dtos = followService.findMyFollowers(id);
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @GetMapping("/followings/{id}") // 팔로잉, 팔로워 전체 조회
    public ResponseEntity<List<FollowerInfo>> findMyFollowings(@PathVariable("id") long id){
        List<FollowerInfo> dtos = followService.findMyFollowings(id);
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @GetMapping("/check")
    public ResponseEntity<Boolean> checkFollow(@RequestParam(value = "sender", required = false) Long sender, @RequestParam("receiver") long recevier){

        return new ResponseEntity<>(followService.check(sender, recevier), HttpStatus.OK);
    }

}
