import styled from 'styled-components'

export const Container = styled.div`
  width: 35vh;
  height: 10vh;
  background: ${(props) => (props.actived ? '#ee6b26' : '#20295f')};
  border-radius: 5px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1vh;
  cursor: pointer;
  transition: all 0.2s ease;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {
    background: #ee6b26;
  }
`
