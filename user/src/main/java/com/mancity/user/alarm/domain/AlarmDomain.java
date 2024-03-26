package com.mancity.user.alarm.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum AlarmDomain {

    GAME_REQUEST("GAME_REQUEST") {
        @Override
        public String generateTitle() {
            return AlarmText.GAME_REQUEST_TITLE;
        }

        @Override
        public String generateContent() {
            return AlarmText.GAME_REQUEST_CONTENT;
        }
    },
    GAME_REQUEST_REPLY("GAME_REQUEST_REPLY") {
        @Override
        public String generateTitle() {
            return AlarmText.GAME_REQUEST_REPLY_TITLE;
        }

        @Override
        public String generateContent() {
            return AlarmText.GAME_REQUEST_REPLY_CONTENT;
        }
    },
    GAME_SUGGEST("GAME_SUGGEST") {
        @Override
        public String generateTitle() {
            return AlarmText.GAME_SUGGEST_TITLE;
        }

        @Override
        public String generateContent() {
            return AlarmText.GAME_SUGGEST_CONTENT;
        }
    },
    GAME_SUGGEST_REPLY("GAME_SUGGEST_REPLY") {
        @Override
        public String generateTitle() {
            return AlarmText.GAME_SUGGEST_REPLY_TITLE;
        }

        @Override
        public String generateContent() {
            return AlarmText.GAME_SUGGEST_REPLY_CONTENT;
        }
    },
    FOLLOW("FOLLOW") {
        @Override
        public String generateTitle() {
            return AlarmText.FOLLOW_TITLE;
        }

        @Override
        public String generateContent() {
            return AlarmText.FOLLOW_CONTENT;
        }
    },
    CLUB_REQUEST("CLUB_REQUEST") {
        @Override
        public String generateTitle() {
            return AlarmText.CLUB_REQUEST_TITLE;
        }

        @Override
        public String generateContent() {
            return AlarmText.CLUB_REQUEST_CONTENT;
        }
    },
    CLUB_REQUEST_REPLY("CLUB_REQUEST_REPLY") {
        @Override
        public String generateTitle() {
            return AlarmText.CLUB_REQUEST_REPLY_TITLE;
        }

        @Override
        public String generateContent() {
            return AlarmText.CLUB_REQUEST_REPLY_CONTENT;
        }
    },
    CALC_COMPLETE("CALC_COMPLETE") {
        @Override
        public String generateTitle() {
            return AlarmText.CALC_COMPLETE_TITLE;
        }

        @Override
        public String generateContent() {
            return AlarmText.CALC_COMPLETE_CONTENT;
        }
    };

    private final String domain;

    public abstract String generateTitle();

    public abstract String generateContent();

}
