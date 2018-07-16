import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ColorList from '../components/ColorList'

const Background = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  flex: 1;
`

export default class Options extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  render() {
    const { navigation } = this.props
    return (
      <Background>
        <ColorList navigation={navigation} />
      </Background>
    )
  }
}
