import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Form = styled.div`
  width: 50%;
  margin-bottom: 70px;
  margin-top: 20px
`;

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative{
    opacity: 0.3;
  }

button{
    border: none;
    background: none;
}

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;
    
    &:hover{
        opacity: 0.7;
    }
  }

`;

export const Input = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 10px 0;

span{
    color: #707070;
    margin-bottom: 5px;
}

Input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #ee6b26;
    cursor: pointer;
  }

`

export const TexArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;

span{
    color: #707070;
    margin-bottom: 5px;
}

textarea{
    font-size: 16px;
    border: 1px solid #ee6b26;
}
`

export const Option = styled.div`
display: flex;
justify-content: space-between;

button {
    font-weight: bold;
    color: #20295f;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }

}
div {
        display: flex;
        align-items: center;
        color: #ee6b26;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
    }
`;

export const Save = styled.div `
width: 100%;
margin-top: 20px;

button {
    width: 100%;
    background: #ee6b26;
    border: none;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
    
    
}

`