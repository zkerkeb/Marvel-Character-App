import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Background from '../components/Background'
import MainMenu from '../components/MainMenu'

import MarvelLogo from '../static/Images/MarvelLogo.png'

const MarvelBanner = styled.Image`
  height: 130;
  width: 100%;
`

const MarvelbannerContainer = styled.TouchableOpacity`
  margin: 40px 15px 40px 15px;
  width: 100%;
  box-shadow: 1px 1px 3px;
`

class Home extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.object,
    navigation: PropTypes.object
  }

  state = {
    data: []
  }

  componentDidMount() {
    // this.props.navigation.navigate('Entities')
  }

  render() {
    const { navigation } = this.props
    return (
      <Background>
        <MarvelbannerContainer
          OnPress={() => console.log('link to the marvel website')}
        >
          <MarvelBanner source={MarvelLogo} resizeMode={'contain'} />
        </MarvelbannerContainer>
        <MainMenu navigation={navigation} />
      </Background>
    )
  }
}

export default Home
