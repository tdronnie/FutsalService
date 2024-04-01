package com.mancity.calc.gamedata.application.dto.request;


import com.mancity.calc.gamedata.domain.Data;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GamedataRequestDto {

    private Long gameId;

    private List<Data> data;
}
