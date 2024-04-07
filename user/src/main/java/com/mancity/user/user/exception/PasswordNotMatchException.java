package com.mancity.user.user.exception;

public class PasswordNotMatchException extends RuntimeException {

    private static final String MESSAGE = "[ERROR] 비밀번호가 틀렸습니다.";

    public PasswordNotMatchException(){
        super(MESSAGE);
    }
}
