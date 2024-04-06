package com.mancity.user.user.domain;

import com.mancity.user.user.domain.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Slf4j
public enum PlayerOrderType {

    GOAL{
        @Override
        public List<Object[]> getListByPlayerOrderType(UserRepository userRepository) {
            log.info("GOAL 관련 정렬");
            return userRepository.getListOrderByGoalDecision();
        }
    },

    PASS{
        @Override
        public List<Object[]> getListByPlayerOrderType(UserRepository userRepository) {
            log.info("PASS 관련 정렬");
            return userRepository.getListOrderByPass();
        }
    },

    SPEED{
        @Override
        public List<Object[]> getListByPlayerOrderType(UserRepository userRepository) {
            log.info("SPEED 관련 정렬");
            return userRepository.getListOrderBySpeed();
        }
    },

    COVERED{
        @Override
        public List<Object[]> getListByPlayerOrderType(UserRepository userRepository) {
            log.info("COVERED 관련 정렬");
            return userRepository.getListOrderByCovered();
        }
    },

    DEFENSE{
        @Override
        public List<Object[]> getListByPlayerOrderType(UserRepository userRepository) {
            log.info("DEFENSE 관련 정렬");
            return userRepository.getListOrderByDefense();
        }
    };

    public abstract List<Object[]> getListByPlayerOrderType(UserRepository userRepository);





}
