package com.mancity.social.game.domain.repository;

import com.mancity.social.game.domain.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, Long> {

    @Query("SELECT DISTINCT g FROM Game g LEFT JOIN g.playersA p1 LEFT JOIN g.playersB p2 WHERE p1.nickname = :nickname OR p2.nickname = :nickname")
    List<Game> findAllByNickname(String nickname);
}
