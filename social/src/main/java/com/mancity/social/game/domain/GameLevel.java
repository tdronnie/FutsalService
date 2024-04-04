package com.mancity.social.game.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum GameLevel {

    H("프로") {
        @Override
        public String getGameLevel() {
            return H.getLevel();
        }
    },
    M("세미프로") {
        @Override
        public String getGameLevel() {
            return M.getLevel();
        }
    },
    L("아마추어") {
        @Override
        public String getGameLevel() {
            return L.getLevel();
        }
    };

    private final String level;

    public abstract String getGameLevel();
}
