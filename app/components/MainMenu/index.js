import React from 'react'

import styled from 'styled-components'

const MenuRow = styled.TouchableOpacity`
  background-color: ${props => props.theme.color.marvelRed}
  width: 100%;
  height: 65;
  margin: 0px 15px 20px 15px;
  display:flex;
  justify-content:center;
  align-items: center;
  box-shadow: 1px 1px 3px;
`

const MenuTitle = styled.Text`
  font-family: gotham;
  font-size: 48px;
  text-transform: uppercase;
  color: ${props => props.theme.color.pureWhite};
`

export default class MainMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MenuRow onPress={() => console.log('add route here')}>
          <MenuTitle> ENTITIES</MenuTitle>
        </MenuRow>
        <MenuRow onPress={() => console.log('add route here')}>
          <MenuTitle> COMICS</MenuTitle>
        </MenuRow>
      </React.Fragment>
    )
  }
}
