import React, { useState } from 'react'
import * as S from './styles'

//NOSSOS COMPONETES

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FilterCard from '../Components/FilterCard'
import TaskCard from '../Components/TaskCard'

function Home() {
  const [filterActived, SetFilterActived] = useState('hoje')
  return (
    <S.Container>
      <Header />
      <S.FilterArea>
        <button type="button" onClick={() => SetFilterActived('todos')}>
          <FilterCard title="Todos" actived={filterActived === 'todos'} />
        </button>
        <button type="button" onClick={() => SetFilterActived('hoje')}>
          <FilterCard title="Hoje" actived={filterActived === 'hoje'} />
        </button>
        <button type="button" onClick={() => SetFilterActived('semana')}>
          <FilterCard title="Semana" actived={filterActived === 'semana'} />
        </button>
        <button type="button" onClick={() => SetFilterActived('mes')}>
          <FilterCard title="Mês" actived={filterActived === 'mes'} />
        </button>
        <button type="button" onClick={() => SetFilterActived('ano')}>
          <FilterCard title="Ano" actived={filterActived === 'ano'} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>TAREFAS</h3>
      </S.Title>

      <S.Content>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </S.Content>
      <Footer />
    </S.Container>
  )
}

export default Home
