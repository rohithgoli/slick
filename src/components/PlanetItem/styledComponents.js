// Style your elements here
import styled from 'styled-components'

export const PlanetItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  width: 100%;
  padding: 32px;
  margin: auto;
`
export const PlanetImage = styled.img`
  height: 300px;
  width: 480px;
`
export const PlanetName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
`

export const PlanetDescription = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  margin: auto;
  text-align: center;
`
