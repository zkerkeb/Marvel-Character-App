import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import styled from 'styled-components'

import { CharacterDescription, CharacterName, LittleLink } from '../Texts'
import DefaultImage from '../../static/Images/defaultImage.png'

const CharacterRow = styled(View)`
  align-items: center;
  background-color: ${props => props.theme.color.white};
  box-shadow: 1px 1px 5px black;
  border: 1px solid ${props => props.theme.color.redDarker};
  display: flex;
  flex-direction: column;
  height: 120px;
  margin-top: 20px;
  width: 100%;
`
const NameContainer = styled.View`
  width: 100%;
  height: 20px;
  background-color: ${props => props.theme.color.redDarker};
`

const HeroPicture = styled.Image`
  height: 98px;
  width: 120px;
`
const Content = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100px;
`
const LinkContainer = styled.View`
  display: flex;
  align-items: flex-end;
  width: 100%;
`

export default class Character extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object
  }

  handleNavigation = item => {
    this.props.navigation.navigate('Entity', {
      item: item
    })
  }

  render() {
    const { item } = this.props
    console.log(item)
    return (
      <CharacterRow>
        <NameContainer>
          <CharacterName>{item.name}</CharacterName>
        </NameContainer>
        <Content>
          <HeroPicture
            defaultSource={DefaultImage}
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`
            }}
            resizeMode={'cover'}
          />
          <CharacterDescription numberOfLines={5} ellipsizeMode={'tail'}>
            {item.description ? item.description : 'no description found'}
          </CharacterDescription>
        </Content>
        <LinkContainer>
          <LittleLink onPress={() => this.handleNavigation(item)}>
            See more
          </LittleLink>
        </LinkContainer>
      </CharacterRow>
    )
  }
}
