package com.mancity.user.alarm.domain.repository;

import com.mancity.user.alarm.domain.Alarm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface AlarmRepository extends JpaRepository<Alarm, Long> {
//    @Query("select a from Alarm a where a.receiverId = :receiverId order by f.id desc")
    List<Alarm> findAllByReceiverIdOrderByIdDesc(long receiverId);

}
