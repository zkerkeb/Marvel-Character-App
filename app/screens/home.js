import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import allTheActions from '../actions/index'
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
    data: PropTypes.object,
    actions: PropTypes.object,
    navigation: PropTypes.object
  }

  state = {
    data: []
  }

  handleParameterPress = () => {
    this.props.navigation.navigate('Options')
  }

  render() {
    return (
      <Background>
        <MarvelbannerContainer
          OnPress={() => console.log('link to the marvel website')}
        >
          <MarvelBanner source={MarvelLogo} resizeMode={'contain'} />
        </MarvelbannerContainer>
        <MainMenu />
      </Background>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    characters: bindActionCreators(allTheActions.characters, dispatch)
  }
})

const mapStateToProps = state => {
  return {
    characters: state.characters.list,
    offset: state.characters.offset
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
