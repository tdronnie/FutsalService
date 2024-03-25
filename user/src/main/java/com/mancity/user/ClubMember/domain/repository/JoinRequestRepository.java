package com.mancity.user.ClubMember.domain.repository;

import com.mancity.user.ClubMember.domain.JoinRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JoinRequestRepository extends JpaRepository<JoinRequest, Long> {

}
