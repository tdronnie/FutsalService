package com.mancity.user.user.domain.repository;

import com.mancity.user.user.application.dto.response.MainPagePlayerDto;
import com.mancity.user.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByNickName(String nickName);

    @Query("select u.nickName from User u where u.id = :id")
    String findNickNameById(long id);

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense from User u where u.isPlayer = true")
    List<Object[]> findAllPlayers();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense from User u where u.isPlayer = true order by u.mainStat.goalDecision DESC")
    List<Object[]> getListOrderByGoalDecision();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense from User u where u.isPlayer = true order by u.mainStat.pass DESC")
    List<Object[]> getListOrderByPass();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense from User u where u.isPlayer = true order by u.mainStat.speed DESC")
    List<Object[]> getListOrderBySpeed();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense from User u where u.isPlayer = true order by u.mainStat.distanceCovered DESC")
    List<Object[]> getListOrderByCovered();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense from User u where u.isPlayer = true order by u.mainStat.defense DESC")
    List<Object[]> getListOrderByDefense();

    @Query("select u.id, u.nickName, u.image, u.stat.goal, u.stat.pass, u.stat.playedTimes from User u where u.isPlayer = true order by u.stat.goal DESC u.stat.assist DESC limit 5")
    List<MainPagePlayerDto> getListOrderByGoalAndAssist();

}
