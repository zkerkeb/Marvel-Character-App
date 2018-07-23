import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Image } from 'react-native'

import allTheActions from '../actions/index'
import Background from '../components/Background'
import ParameterIcon from '../static/Images/parameter.png'

import CharacterRow from '../components/CharacterRow'
import CharactersList from '../components/CharactersList'

const Parameter = styled.TouchableOpacity``

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

  _renderItem = ({ item }) => {
    return <CharacterRow item={item} />
  }

  render() {
    return (
      <Background>
        <CharactersList />
        <Parameter onPress={this.handleParameterPress}>
          <Image source={ParameterIcon} />
        </Parameter>
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
