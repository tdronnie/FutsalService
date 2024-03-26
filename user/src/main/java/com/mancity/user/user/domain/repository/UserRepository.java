package com.mancity.user.user.domain.repository;

import com.mancity.user.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByNickName(String nickName);

    String findNickNameById(long senderId);
}
