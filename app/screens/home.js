import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Image, TouchableOpacity } from 'react-native'
import ParameterIcon from '../static/Images/parameter.png'

const Background = styled.View`
  background-color: ${props => props.color};
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Parameter = styled.TouchableOpacity``
class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    primaryColor: PropTypes.string
  }

  handleParameterPress = () => {
    this.props.navigation.navigate('Options')
  }

  render() {
    const { primaryColor } = this.props
    return (
      <Background color={primaryColor}>
        <Parameter onPress={this.handleParameterPress}>
          <Image source={ParameterIcon} />
        </Parameter>
      </Background>
    )
  }
}

const mapStateToProps = state => {
  return {
    primaryColor: state.theme.primaryColor
  }
}

export default connect(mapStateToProps)(Home)
