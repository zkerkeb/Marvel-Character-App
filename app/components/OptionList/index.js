import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'

import OptionsRow from '../OptionsRow'

const CurrentTheme = styled.View`
  background-color: ${props => props.color};
  height: 36;
  width: 45;
`

class OptionList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    primaryColor: PropTypes.string
  }

  handleThemePress = () => {
    this.props.navigation.navigate('Themes')
  }
  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
        <OptionsRow
          navigation={navigation}
          onPress={this.handleThemePress}
          RightElement={() => <CurrentTheme color={this.props.primaryColor} />}
          title="THEMES"
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    primaryColor: state.theme.primaryColor
  }
}

export default connect(mapStateToProps)(OptionList)
