import styled from 'styled-components'

export const Container = styled.div`
  width: 34vh;
  height: 30h;
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.61);

  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  padding: 15px;
  margin: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
    box-shadow: 0px 4px 18px 0px rgb(238 107 38 / 51%);
    opacity: 0.8;
  }

  img {
    width: 11vh;
    height: auto;
  }
`

export const Topcard = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  strong {
    color: #ee6b26;
    font-weight: bold;
  }

  span {
    color: #707070;
  }
`
