package com.mancity.calc.gamedata.domain.respository;


import com.mancity.calc.gamedata.domain.Data;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GamedataRepository extends JpaRepository<Data, Long> {
}
