package com.mancity.social.highlight.domain.repository;

import com.mancity.social.highlight.domain.Highlight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HighlightRepository extends JpaRepository<Highlight, Long> {

    public List<Highlight> findByGameId(Long id);


}
