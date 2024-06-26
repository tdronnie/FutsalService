package com.mancity.user.user.domain.repository;

import com.mancity.user.user.application.dto.response.MainPagePlayerDto;
import com.mancity.user.user.domain.User;
import org.springframework.data.domain.Pageable;
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

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense, u.height, u.weight from User u where u.isPlayer = true order by u.id desc")
    List<Object[]> findAllPlayers();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense, u.height, u.weight from User u where u.isPlayer = true order by u.mainStat.goalDecision DESC")
    List<Object[]> getListOrderByGoalDecision();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense, u.height, u.weight from User u where u.isPlayer = true order by u.mainStat.pass DESC")
    List<Object[]> getListOrderByPass();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense, u.height, u.weight from User u where u.isPlayer = true order by u.mainStat.speed DESC")
    List<Object[]> getListOrderBySpeed();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense, u.height, u.weight from User u where u.isPlayer = true order by u.mainStat.distanceCovered DESC")
    List<Object[]> getListOrderByCovered();

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense, u.height, u.weight from User u where u.isPlayer = true order by u.mainStat.defense DESC")
    List<Object[]> getListOrderByDefense();

//    @Query("SELECT NEW com.mancity.user.user.application.dto.response.MainPagePlayerDto(u.id, u.nickName, u.image, u.stat.goal, u.stat.pass, u.stat.playedTimes) FROM User u WHERE u.isPlayer = true ORDER BY u.stat.goal DESC, u.stat.assist DESC limit 5")
    @Query("SELECT NEW com.mancity.user.user.application.dto.response.MainPagePlayerDto(u.id, u.nickName, u.image, u.stat.goal, u.stat.pass, u.stat.assist, u.stat.playedTimes) FROM User u WHERE u.isPlayer = true ORDER BY u.stat.goal DESC, u.stat.assist DESC")
    List<MainPagePlayerDto> getListOrderByGoalAndAssist(Pageable pageable);

    @Query("select u from User u where u.nickName like %:word% or u.email like %:word%")
    List<User> findByNickNameOrEmail(String word);
}
