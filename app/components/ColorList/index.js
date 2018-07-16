import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ScrollView } from 'react-native'
import styled from 'styled-components'

import { theme } from '../../config/theme'
import OptionsRow from '../OptionsRow'
import allTheActions from '../../actions'

const AtomicBlue = styled.View`
  background-color: ${({ theme }) => theme.color.blue};
  height: 36;
  width: 45;
`
const VelvetRed = styled(AtomicBlue)`
  background-color: ${({ theme }) => theme.color.red};
`
const FantasticGreen = styled(AtomicBlue)`
  background-color: ${({ theme }) => theme.color.green};
`

const SabakuNoYellow = styled(AtomicBlue)`
  background-color: ${({ theme }) => theme.color.yellow};
`

const ClockworkOrange = styled(AtomicBlue)`
  background-color: ${({ theme }) => theme.color.orange};
`

const ViolaceousViolet = styled(AtomicBlue)`
  background-color: ${({ theme }) => theme.color.violet};
`

const TarGrey = styled(AtomicBlue)`
  background-color: ${({ theme }) => theme.color.grey};
`

class ColorList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    actions: PropTypes.object
  }

  handleColorPress = color => {
    const { actions } = this.props
    actions.theme.changePrimaryColor(color)
    this.props.navigation.popToTop()
  }
  render() {
    return (
      <ScrollView>
        <OptionsRow
          onPress={() => this.handleColorPress(theme.color.blue)}
          title="BLEU"
          RightElement={AtomicBlue}
        />
        <OptionsRow
          onPress={() => this.handleColorPress(theme.color.red)}
          title="ROUGE"
          RightElement={VelvetRed}
        />
        <OptionsRow
          onPress={() => this.handleColorPress(theme.color.green)}
          title="VERT"
          RightElement={FantasticGreen}
        />
        <OptionsRow
          onPress={() => this.handleColorPress(theme.color.yellow)}
          title="JAUNE"
          RightElement={SabakuNoYellow}
        />
        <OptionsRow
          onPress={() => this.handleColorPress(theme.color.orange)}
          title="ORANGE"
          RightElement={ClockworkOrange}
        />
        <OptionsRow
          onPress={() => this.handleColorPress(theme.color.violet)}
          title="VIOLET"
          RightElement={ViolaceousViolet}
        />
        <OptionsRow
          onPress={() => this.handleColorPress(theme.color.grey)}
          title="GRIS"
          RightElement={TarGrey}
        />
      </ScrollView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(ColorList)
