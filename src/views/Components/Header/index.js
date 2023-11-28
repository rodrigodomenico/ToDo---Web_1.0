import React from 'react'

import * as S from './styles'

import logo from '../../../assets/Logo/logo.png'
import bell from '../../../assets/Web/bell.png'
import {Link} from 'react-router-dom'

function Header({lateCount, clickNotifica}) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo ToDo"></img>
      </S.LeftSide>
      <S.RightSide>
        <Link to='/'>INÍCIO</Link>
        <span className="dividir" />
        <Link to='/task'>NOVA TAREFA</Link>
        <span className="dividir" />
        <a href="#">ANOTAÇÕES</a>
        <span className="dividir" />
        <a href="#">SINCRONIZAR CELULAR</a>

        <span className="dividir" />
        <button onClick={clickNotifica} href="#" id="notification">
          <img src={bell} alt="Imagem de Notificação" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  )
}

export default Header
