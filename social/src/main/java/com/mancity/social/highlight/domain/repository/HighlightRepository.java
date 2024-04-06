package com.mancity.social.highlight.domain.repository;

import com.mancity.social.highlight.domain.Highlight;
import com.mancity.social.highlight.domain.Myhighlight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HighlightRepository extends JpaRepository<Highlight, Long> {

    public List<Highlight> findByGameId(Long id);

    @Query("select m from Myhighlight m where m.userId = :id")
    public List<Myhighlight> findAllByUserId(Long id);


}
