import React, {useMemo} from 'react';
import { format } from 'date-fns';
import typeIcons from '../../../utils/typeicons';
import * as S from './styles';

function TaskCard({type, title, when}) {
 const date =useMemo(()=>format(new Date(when), 'dd/MM/yyyy') );
 const hour =useMemo(()=>format(new Date(when), 'HH:mm') );




  return (
    <S.Container>
      <S.Topcard>
        <img src={typeIcons[type]} alt="Icone"></img>
        <h3>{title}</h3>
      </S.Topcard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard
