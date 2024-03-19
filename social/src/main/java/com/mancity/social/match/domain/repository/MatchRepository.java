package com.mancity.social.match.domain.repository;

import com.mancity.social.match.domain.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Long> {

//    @Query("SELECT m FROM match_table m JOIN m.playersA p1 JOIN m.playersB p2 WHERE :nickname MEMBER OF p1.nickname OR :nickname MEMBER OF p2.nickname")
    List<Match> findAllByNickname(String nickname);
}
