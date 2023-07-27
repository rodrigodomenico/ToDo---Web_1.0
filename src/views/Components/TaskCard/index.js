import React from 'react'
import * as S from './styles'

import iconDefault from '../../../assets/Web/nota.png'

function TaskCard() {
  return (
    <S.Container>
      <S.Topcard>
        <img src={iconDefault} alt="Icone"></img>
        <h3>Título da Tarefa</h3>
      </S.Topcard>
      <S.BottomCard>
        <strong>17/10/2020</strong>
        <span>10:00</span>
      </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard
