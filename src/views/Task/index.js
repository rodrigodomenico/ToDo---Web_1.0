import React, { useState, useEffect } from 'react'
import * as S from './styles'

import api from '../../services/api'

//COMPONETES

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import typeIcons from '../../utils/typeicons'
import { setDate } from 'date-fns'

function Task() {
  const [SetFilterActived] = useState('today');
  const [lateCount, setLateCount] = useState(); 
  const [type, setType] = useState();
  const [id, setID] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, Setdescription] = useState();
  const [date, SetDate] = useState();
  const [hour, SetHour] = useState();
  const [macaddress, SetMacaddress] = useState('11:11:11:11');

  async function lateVerify(){
  await api.get(`/task/filter/late/11:11:11:11`)
  .then(Response =>{
  setLateCount(Response.data.length);
  })
}
  useEffect(() => {
    lateVerify();
  }, );

  function Notifica(){
    SetFilterActived('late')
  }

  async function Save(){
    await api.post('/task',{
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
    }).then(()=>
        alert('Tarefa cadastrada com sucesso!')
    )
  }

  useEffect(() => {
    document.title = `(${lateCount}) ToDo - Organizando seu dia :) Contagem:`;
  }, [lateCount]);

  return (
    <S.Container>
    <Header lateCount={lateCount}/>
    <S.Form>
        <S.TypeIcons>
{
    typeIcons.map((icon, index) => (
        
        index > 0 && 
        <button type='button' onClick={() => setType(index)}>
        <img src={icon} alt="Icone da Tarefa"
        className={type && type != index && 'inative' }/>
        </button>
    ))
}
        </S.TypeIcons>
        <S.Input>
            <span>Título</span>
            <input type='text' placeholder='Titulo da tarefa...' 
            onChange={e => setTitle(e.target.value)} value={title}/>
        </S.Input>
        <S.TexArea>
            <span>Descrição</span>
            <textarea rows={5} placeholder='Detalhes da tarefa'
            onChange={e => Setdescription(e.target.value)} value={description}/>
        </S.TexArea>
        <S.Input>
            <span>Data</span>
            <input type='Date' placeholder='Data da tarefa...'
            onChange={e => SetDate(e.target.value)} value={date}/>
        </S.Input>
        <S.Input>
            <span>Hora</span>
            <input type='time' placeholder='Hora da tarefa...'
            onChange={e => SetHour(e.target.value)} value={hour}/>
        </S.Input>
        <S.Option>
            <div>
                <input type='checkbox' checked={done} onChange={() => setDone(!done)}></input>
                <span>CONCLUÍDO</span>
            </div>
            <button type='button'>EXCLUIR</button>
        </S.Option>
        <S.Save>
            <button type='button' onClick={Save}>SALVAR</button>
        </S.Save>
    </S.Form>
      <Footer />
    </S.Container>
  )
}

export default Task
