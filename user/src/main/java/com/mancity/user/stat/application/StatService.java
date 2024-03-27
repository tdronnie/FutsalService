package com.mancity.user.stat.application;

import com.mancity.user.stat.application.dto.request.PlusRequestDto;
import com.mancity.user.stat.application.dto.response.StatAvgResponseDto;
import com.mancity.user.stat.application.dto.response.StatTotalResponseDto;
import com.mancity.user.stat.domain.Stat;
import com.mancity.user.stat.domain.repository.StatRepository;
import com.mancity.user.user.domain.User;
import com.mancity.user.user.domain.repository.UserRepository;
import com.mancity.user.user.exception.UserNotExistException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class StatService {

    private final StatRepository statRepository;

    private final UserRepository userRepository;

    public void plus(PlusRequestDto dto){
        User user = userRepository.findById(dto.getId()).orElseThrow(UserNotExistException::new);
        user.getStat().plusStat(dto);
        user.getMainStat().update(user.getStat());
        user.getLastStat().update(dto);

        userRepository.save(user);
    }

    public StatAvgResponseDto findAvgById(long id){
        return StatAvgResponseDto.from(statRepository.findById(id).orElseThrow());
    }

    public StatTotalResponseDto findTotalById(long id){
        return StatTotalResponseDto.from(statRepository.findById(id).orElseThrow());
    }

    public void findTotalByMultipleId(List<Long> ids){

    }
}
