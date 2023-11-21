import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #20295f;
  border-bottom: 5px solid #ee6b26;

  display: flex;
`
export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img {
    width: 100px;
    height: 40px;
  }
`
export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    transition: all 0.2s ease;

    &:hover {
      color: #ee6b26;
    }
  }

  button {
      background: none;
      border:none;
      cursor: pointer;
    }

  #notification {
    
    img {
      width: 30px;
      height: 30px;
    }

    span {
      background: #fff;
      color: #ee6b26;
      padding: 3px 7px;
      border-radius: 50%;
      top: -20px;
      right: 10px;
      position: relative;
    }

    &:hover {
      opacity: 50%;
    }

   

  }

  .dividir::after {
    content: '|';
    margin: 0 10px;
    color: #fff;
  }
`
