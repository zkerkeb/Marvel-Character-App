import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import allTheActions from '../actions/index'
import Background from '../components/Background'
import CharacterList from '../components/CharactersList'

class Home extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    actions: PropTypes.object,
    navigation: PropTypes.object
  }

  state = {
    data: []
  }

  render() {
    const { navigation } = this.props
    return (
      <Background>
        <CharacterList navigation={navigation} />
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
