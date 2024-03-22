package com.mancity.user.stat.application;

import com.mancity.user.stat.application.dto.request.PlusRequestDto;
import com.mancity.user.stat.application.dto.response.StatAvgResponseDto;
import com.mancity.user.stat.application.dto.response.StatTotalResponseDto;
import com.mancity.user.stat.domain.Stat;
import com.mancity.user.stat.domain.repository.StatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class StatService {

    private final StatRepository statRepository;

    public void plus(PlusRequestDto dto){
        Stat stat = statRepository.findById(dto.getId())
                .orElseThrow();
        stat.plusStat(dto);
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
