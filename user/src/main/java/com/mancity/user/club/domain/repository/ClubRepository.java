package com.mancity.user.club.domain.repository;

import com.mancity.user.club.domain.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClubRepository extends JpaRepository<Club, Long> {

    @Query("select c from Club c where c.region = :region")
    List<Club> findAllByRegion(String region);
}
