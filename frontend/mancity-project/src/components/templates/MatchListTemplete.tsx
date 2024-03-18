import React from 'react'
import Header from '@/components/organisms/header/Header'
import WideCard from '../molecules/wide_card/WideCard'
import IconButton from '../atoms/icon_button/IconButton'

const MatchListTemplete = () => {
  return (
    <>
        <Header label='매치 목록' display='hidden' />
        <WideCard />
        <IconButton icon="pen" />
    </>
  )
}

export default MatchListTemplete