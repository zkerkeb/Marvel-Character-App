import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

import allTheActions from '../actions/index'

const EntityContainer = styled.View`
  margin-top: 20px;
`

class Entity extends React.Component {
  componentDidMount() {
    const character = this.props.navigation.getParam('item')
    const { actions } = this.props
    actions.characters.getCharacter(character.id)
  }
  render() {
    console.log(this.props)
    console.log(this.props.navigation.getParam('item'))
    const { characterDetails } = this.props
    return (
      <EntityContainer>
        {characterDetails ? (
          <Text>{characterDetails.name}</Text>
        ) : (
          <Text>Aucune data disponible</Text>
        )}
      </EntityContainer>
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
    characterDetails: state.characters.characterDetails
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entity)
