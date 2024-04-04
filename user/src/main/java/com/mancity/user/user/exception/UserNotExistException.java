package com.mancity.user.user.exception;

public class UserNotExistException extends RuntimeException {

    private static final String MESSAGE = "[ERROR] 존재하지 않는 유저입니다.";

    public UserNotExistException(){
        super(MESSAGE);
    }
}
