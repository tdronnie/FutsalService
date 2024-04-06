package com.mancity.user.follow.application;

import com.mancity.user.alarm.application.AlarmService;
import com.mancity.user.alarm.application.dto.request.AlarmCreateDto;
import com.mancity.user.follow.application.dto.request.FollowSendRequestDto;
import com.mancity.user.follow.application.dto.request.UnfollowSendRequestDto;
import com.mancity.user.follow.application.dto.response.FollowResponseDto;
import com.mancity.user.follow.application.dto.response.FollowerInfo;
import com.mancity.user.follow.domain.repository.FollowRepository;
import com.mancity.user.user.domain.User;
import com.mancity.user.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class FollowService {

    private final FollowRepository followRepository;

    private final UserRepository userRepository;

    private final AlarmService alarmService;

    public void follow(FollowSendRequestDto dto) {
        followRepository.save(dto.toEntity());
        AlarmCreateDto alarmCreateDto = AlarmCreateDto.builder()
                .senderId(dto.getSenderId())
                .receiverId(dto.getReceiverId())
                .domain("FOLLOW")
                .domainId(0L)
                .build();
        alarmService.createAlarm(alarmCreateDto);
    }

    public FollowResponseDto findFollowersAndFollowings(long id) {
        List<FollowerInfo> followers = findMyFollowers(id);
        List<FollowerInfo> followings = findMyFollowings(id);

        return FollowResponseDto.of(followers,followings);
    }

    public List<FollowerInfo> findMyFollowers(long id){
        List<Long> senderIds = followRepository.findSenderIdByReceiverId(id);
        List<User> senders = userRepository.findAllById(senderIds);

        List<FollowerInfo> followers = new ArrayList<>();
        for(User user : senders){
            FollowerInfo info = FollowerInfo.of(user);

            followers.add(info);
        }

        return followers;
    }

    public List<FollowerInfo> findMyFollowings(long id){
        List<Long> receiverIds = followRepository.findReceiverIdBySenderId(id);
        List<User> receivers = userRepository.findAllById(receiverIds);

        List<FollowerInfo> followings = new ArrayList<>();

        for(User user : receivers){
            FollowerInfo info = FollowerInfo.of(user);

            followings.add(info);
        }

        return followings;
    }

    public void unfollow(UnfollowSendRequestDto dto) {
        followRepository.deleteBySenderIdAndReceiverId(dto.getSenderId(), dto.getReceiverId());
    }

    public Boolean check(Long sender, long receiver) {
        return followRepository.existsBySenderIdAndReceiverId(sender, receiver);
    }

}
