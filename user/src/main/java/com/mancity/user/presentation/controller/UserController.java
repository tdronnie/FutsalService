package com.mancity.user.presentation.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class UserController {

    @GetMapping("/user/test")
    public String test(){
        log.info("msa user call");
        return "test success";
    }
}
