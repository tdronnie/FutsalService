package com.mancity.user.stat.application;

import com.mancity.user.stat.domain.Stat;
import com.mancity.user.stat.domain.repository.StatRepository;
import com.mancity.user.user.domain.User;
import com.mancity.user.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class StatGenerator {

    private final StatRepository statRepository;

    private final UserRepository userRepository;

    public void create(Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow();
        Stat stat = Stat.builder()
                .user(user)
                .build();
        statRepository.save(stat);
    }
}
