package com.mancity.user.alarm.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import static com.mancity.user.alarm.domain.AlarmText.*;

@Getter
@RequiredArgsConstructor
public enum AlarmDomain {

    GAME_REQUEST("GAME_REQUEST") {
        @Override
        public String generateTitle() {
            return GAME_REQUEST_TITLE;
        }

        @Override
        public String generateContent() {
            return GAME_REQUEST_CONTENT;
        }
    },
    GAME_REQUEST_REPLY("GAME_REQUEST_REPLY") {
        @Override
        public String generateTitle() {
            return GAME_REQUEST_REPLY_TITLE;
        }

        @Override
        public String generateContent() {
            return GAME_REQUEST_REPLY_CONTENT;
        }
    },
    GAME_SUGGEST("GAME_SUGGEST") {
        @Override
        public String generateTitle() {
            return GAME_SUGGEST_TITLE;
        }

        @Override
        public String generateContent() {
            return GAME_SUGGEST_CONTENT;
        }
    },
    GAME_SUGGEST_REPLY("GAME_SUGGEST_REPLY") {
        @Override
        public String generateTitle() {
            return GAME_SUGGEST_REPLY_TITLE;
        }

        @Override
        public String generateContent() {
            return GAME_SUGGEST_REPLY_CONTENT;
        }
    },
    FOLLOW("FOLLOW") {
        @Override
        public String generateTitle() {
            return FOLLOW_TITLE;
        }

        @Override
        public String generateContent() {
            return FOLLOW_CONTENT;
        }
    },
    CLUB_REQUEST("CLUB_REQUEST") {
        @Override
        public String generateTitle() {
            return CLUB_REQUEST_TITLE;
        }

        @Override
        public String generateContent() {
            return CLUB_REQUEST_CONTENT;
        }
    },
    CLUB_REQUEST_REPLY("CLUB_REQUEST_REPLY") {
        @Override
        public String generateTitle() {
            return CLUB_REQUEST_REPLY_TITLE;
        }

        @Override
        public String generateContent() {
            return CLUB_REQUEST_REPLY_CONTENT;
        }
    },
    CALC_COMPLETE("CALC_COMPLETE") {
        @Override
        public String generateTitle() {
            return CALC_COMPLETE_TITLE;
        }

        @Override
        public String generateContent() {
            return CALC_COMPLETE_CONTENT;
        }
    };

    private final String domain;

    public abstract String generateTitle();

    public abstract String generateContent();

    public boolean isNeedNickName(){
        return domain.equals(CLUB_REQUEST_CONTENT) || domain.equals(CLUB_REQUEST_REPLY_TITLE)
                || domain.equals(GAME_REQUEST_CONTENT) || domain.equals(GAME_REQUEST_REPLY_TITLE)
                || domain.equals(GAME_SUGGEST_TITLE);
    }
}
