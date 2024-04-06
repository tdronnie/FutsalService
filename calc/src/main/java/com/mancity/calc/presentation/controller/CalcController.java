package com.mancity.calc.presentation.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/calc")
public class CalcController {

    @GetMapping("/test")
    public String test() {
        log.info("===== MSA Calc Service call =====");
        return "test success";
    }
}
