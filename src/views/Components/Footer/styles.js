import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #20295f;
  border-top: 5px solid #ee6b26;

  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  a,
  span {
    color: #fff;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    transition: all 0.2s ease;
    color: #ee6b26;
  }
`

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding: 2vh;
`

export const Center = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 2vh;
  margin-left: 20px;
  justify-content: center;
`

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2vh;
`
