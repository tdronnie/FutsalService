package com.mancity.social.game.domain.repository;

import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.QGame;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GameRepositorySupport {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    QGame qGame = QGame.game;

    public List<Game> findAllByFilters(Integer gender, Integer region, Integer playerNumber, Integer level) {
        BooleanBuilder builder = new BooleanBuilder();

        if (gender != null) {
            System.out.println(gender);
            builder.and(qGame.gender.eq(gender));
        }

//        if (region != null) {
//            builder.and(qGame.region.eq(region));
//        }

        if (playerNumber != null) {
            builder.and(qGame.playerNumber.eq(playerNumber));
        }

//        if (level != null) {
//            builder.and(qGame.level.eq(level));
//        }

        return jpaQueryFactory.selectFrom(qGame)
                .where(builder)
                .fetch();
    }
}
