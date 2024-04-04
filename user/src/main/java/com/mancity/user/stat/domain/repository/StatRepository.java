package com.mancity.user.stat.domain.repository;

import com.mancity.user.stat.domain.Stat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatRepository extends JpaRepository<Stat, Long> {
}
