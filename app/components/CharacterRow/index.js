import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import styled from 'styled-components'

import { CharacterDescription, ScalableCharacterName } from '../Texts'
import truncateText from '../../utils/truncateText'
import DefaultImage from '../../static/Images/defaultImage.png'

const CharacterRow = styled(View)`
  align-items: center;
  background-color: ${props => props.theme.color.white};
  box-shadow: 1px 1px 5px black;
  display: flex;
  flex-direction: row;
  height: 100px;
  margin-top: 20px;
  width: 100%;
`
const HeroPicture = styled(Image)`
  height: 100px;
  width: 120px;
`
const AllDescriptions = styled(View)`
  display: flex;
  flex: 1;
  height: 100px;
`

export default class Character extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object
  }

  render() {
    const { item } = this.props
    return (
      <CharacterRow>
        <HeroPicture
          defaultSource={DefaultImage}
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`
          }}
        />
        <AllDescriptions>
          <ScalableCharacterName size={16}>{item.name}</ScalableCharacterName>
          <CharacterDescription>
            {item.description
              ? truncateText(item.description, 110)
              : 'no description found'}
          </CharacterDescription>
        </AllDescriptions>
      </CharacterRow>
    )
  }
}
