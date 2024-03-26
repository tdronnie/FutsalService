package com.mancity.user.alarm.domain.repository;

import com.mancity.user.alarm.domain.Alarm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface AlarmRepository extends JpaRepository<Alarm, Long> {
    List<Alarm> findAllByReceiverId(long receiverId);

}
