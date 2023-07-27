import React from 'react'
import * as S from './styles'

import logo from '../../../assets/Logo/logo.png'
import bell from '../../../assets/Web/bell.png'

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo ToDo"></img>
      </S.LeftSide>
      <S.RightSide>
        <a href="#">INÍCIO</a>
        <span className="dividir" />
        <a href="#">NOVA TAREFA</a>
        <span className="dividir" />
        <a href="#">ANOTAÇÕES</a>
        <span className="dividir" />
        <a href="#">SINCRONIZAR CELULAR</a>

        <span className="dividir" />
        <a href="#" id="notification">
          <img src={bell} alt="Imagem Notificação" />
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  )
}

export default Header
