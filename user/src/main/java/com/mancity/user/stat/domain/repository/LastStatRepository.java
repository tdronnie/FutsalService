package com.mancity.user.stat.domain.repository;

import com.mancity.user.stat.domain.LastStat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LastStatRepository extends JpaRepository<LastStat, Long> {
}
