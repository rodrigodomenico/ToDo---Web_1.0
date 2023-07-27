import React from 'react'
import * as S from './styles'

function Footer() {
  return (
    <S.Container>
      <S.LeftSide>
        <a href="mailto:rodriggodomenico@gmail.com">Ajuda</a>
      </S.LeftSide>
      <S.Center>
        <span>ToDo - Organizando seu dia :) </span>
      </S.Center>
      <S.RightSide>
        <a href="https://www.instagram.com/_rodzinski/" target="_black">
          © 2023 DevLog.
        </a>
      </S.RightSide>
    </S.Container>
  )
}

export default Footer
