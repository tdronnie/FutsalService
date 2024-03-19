package com.mancity.social.game.domain.repository;

import com.mancity.social.game.domain.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, Long> {

    @Query("select g from game g where g.playersA.nickname = :nickname")
    List<Game> findAllByNickname(String nickname);
}
