import React from 'react'
import styled from 'styled-components'

import Proptypes from 'prop-types'

const OptionRow = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 78;
  padding: 28px 16px;
  justify-content: ${props =>
    props.RightElement ? 'space-between' : 'center'};
`
const OptionTitle = styled.Text`
  font-size: 16px;
`

const Separator = styled.View`
  background-color: #e0dede;
  height: 1;
  margin: 0 14px;
`

export default class OptionsRow extends React.Component {
  static propTypes = {
    onPress: Proptypes.func,
    RightElement: Proptypes.any,
    title: Proptypes.string
  }

  render() {
    const { title, RightElement, onPress } = this.props

    return (
      <React.Fragment>
        <OptionRow RightElement={RightElement} onPress={onPress}>
          <OptionTitle>{title}</OptionTitle>
          {RightElement ? <RightElement /> : null}
        </OptionRow>
        <Separator />
      </React.Fragment>
    )
  }
}
