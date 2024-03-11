package com.mancity.social.presentation.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/social")
public class SocialController {

    @GetMapping("/test")
    public String test(){
        log.info("msa social call");
        return "test success";
    }
}