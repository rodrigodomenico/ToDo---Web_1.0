import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 3px 0px;
  justify-content: space-around;
  margin-top: 30px;

  button {
    background: none;
    border: none;
  }
`
export const Content = styled.div`
  width: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 10vh;
`

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #20295f;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  h3 {
    color: #20295f;
    position: relative;
    top: 30px;
    background: #fff;
    padding: 0 20px;
    letter-spacing: 7px;
  }
`
