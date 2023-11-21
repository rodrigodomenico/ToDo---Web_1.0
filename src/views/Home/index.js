import React, { useState, useEffect } from 'react'
import * as S from './styles'

//NOSSOS COMPONETES

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FilterCard from '../Components/FilterCard'
import TaskCard from '../Components/TaskCard'
import api from '../../services/api'


function Home() {
  const [filterActived, SetFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState(0);
  
  async function loadTask(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11`)
    .then(Response =>{
    setTasks(Response.data);
    console.log(Response.data)
    })
  }

async function lateVerify(){
  await api.get(`/task/filter/late/11:11:11:11`)
  .then(Response =>{
  setLateCount(Response.data.length);
  })
}

function Notifica(){
  SetFilterActived('late')
}

  useEffect(() => {
    loadTask();
    lateVerify();
  }, [filterActived]);

  useEffect(() => {
    document.title = `(${lateCount}) ToDo - Organizando seu dia :) Contagem:`;
  }, [lateCount]);

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotifica={Notifica}/>
      <S.FilterArea>
        <button type="button" onClick={() => SetFilterActived('all')}>
          <FilterCard title="Todos" actived={filterActived === 'all'} />
        </button>
        <button type="button" onClick={() => SetFilterActived('today')}>
          <FilterCard title="Hoje" actived={filterActived === 'today'} />
        </button>
        <button type="button" onClick={() => SetFilterActived('week')}>
          <FilterCard title="Semana" actived={filterActived === 'week'} />
        </button>
        <button type="button" onClick={() => SetFilterActived('month')}>
          <FilterCard title="Mês" actived={filterActived === 'month'} />
        </button>
        <button type="button" onClick={() => SetFilterActived('year')}>
          <FilterCard title="Ano" actived={filterActived === 'year'} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>
      <S.Content>
        {
          tasks.map(t =>(
        <TaskCard type={t.type} title={t.title} when={t.when}/>
        ))
        }
      </S.Content>
      <Footer />
    </S.Container>
  )
}

export default Home
