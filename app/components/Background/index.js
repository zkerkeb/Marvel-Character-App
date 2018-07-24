import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Background from '../../static/Images/background.png'

const BackgroundContainer = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`
const BackgroundView = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`

export default class BackgroundImage extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <BackgroundView>
        <BackgroundContainer source={Background} />
        {children}
      </BackgroundView>
    )
  }
}
