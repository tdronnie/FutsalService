package com.mancity.social.game.domain.repository;

import com.mancity.social.game.domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
