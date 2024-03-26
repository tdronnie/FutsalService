package com.mancity.user.follow.domain.repository;

import com.mancity.user.follow.domain.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FollowRepository extends JpaRepository<Follow, Long> {

    @Query("select f.senderId from Follow f where receiverId=:receiverId")
    List<Long> findSenderIdByReceiverId(long receiverId);

    @Query("select f.receiverId from Follow f where senderId=:senderId")
    List<Long> findReceiverIdBySenderId(long senderId);

    @Modifying
    @Query("delete from Follow f where senderId=:senderId and receiverId=:receiverId")
    int deleteBySenderIdAndReceiverId(long senderId, long receiverId);

}
