import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CharacterRow from '../CharacterRow'
import List from '../List'
import allTheActions from '../../actions'

class CharactersList extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.object,
    characters: PropTypes.array,
    offset: PropTypes.number
  }

  componentDidMount() {
    if (!this.props.characters[0]) {
      this.props.actions.characters.getCharacters()
    }
  }

  _keyExtractor = item => `${item.id}`

  _renderItem = ({ item }) => {
    return <CharacterRow item={item} />
  }

  onEndReached = () => {
    const { actions, offset } = this.props
    actions.characters.getCharacters(offset + 20)
  }

  render() {
    return (
      <List
        data={this.props.characters}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this.onEndReached}
      />
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
)(CharactersList)
