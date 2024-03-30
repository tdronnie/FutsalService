package com.mancity.social.highlight.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Highlight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "highlight", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Myhighlight> myhighlights = new ArrayList<>();

    private Long gameId;

    private String url;

    public void addStoredHighlights(Myhighlight myhighlight) {
        myhighlights.add(myhighlight);
    }


}
