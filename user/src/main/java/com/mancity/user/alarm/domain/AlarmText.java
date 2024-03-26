package com.mancity.user.alarm.domain;

import lombok.Getter;

@Getter
public class AlarmText {

    /* 경기 분석 완료 */
    public static final String CALC_COMPLETE_TITLE = "경기 분석이 완료됐어요 !";
    public static final String CALC_COMPLETE_CONTENT = "방금 분석된 따끈따끈한 분석 과를 살펴보세요 !";

    /* 클럽 가입 요청 */
    public static final String CLUB_REQUEST_TITLE= "클럽 가입 신청이 도착했어요 !";
    public static final String CLUB_REQUEST_CONTENT = "님이 클럽에 가입 요청을 보냈어요 !"; // Sender 필요

    /* 클럽 가입 요청 응답 */
    public static final String CLUB_REQUEST_REPLY_TITLE = "님의 클럽 참여 요청이 수락되었어요 !"; // Sender 필요
    public static final String CLUB_REQUEST_REPLY_CONTENT = "클럽 멤버들과 즐거운 한 게임 어떠세요 ?";

    /* 매치 참여 요청 */
    public static final String GAME_REQUEST_TITLE = "매치 참가 요청이 도착했어요";
    public static final String GAME_REQUEST_CONTENT = "님이 매치에 참여 요청을 보냈어요 !"; // Sender 필요

    /* 매치 참여 요청 응답 */
    public static final String GAME_REQUEST_REPLY_TITLE = "님의 매치 참여 요청이 수락되었어요 !"; // Sender 필요
    public static final String GAME_REQUEST_REPLY_CONTENT = "재밌고 즐거운 매치 하고 오세요 !";

    /* 용병 및 매치 참여 제안 */
    public static final String GAME_SUGGEST_TITLE = "용병 참여 요청이 도착했어요 !"; // Sender 필요
    public static final String GAME_SUGGEST_CONTENT = "저희와 함께 즐거운 한 게임 어떠세요 ?";

    /* 용병 및 매치 참여 제안 응답 */
    public static final String GAME_SUGGEST_REPLY_TITLE = "님이 용병 제안을 수락하셨어요 !";
    public static final String GAME_SUGGEST_REPLY_CONTENT = "덕분에 우리 팀의 약점이 줄어들었어요 !";

    /* 팔로잉 */
    public static final String FOLLOW_TITLE = "님, 팔로워가 늘었어요.";
    public static final String FOLLOW_CONTENT = "누가 나를 팔로잉 했는지 확인해보세요 !";

}
