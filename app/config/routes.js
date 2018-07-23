import { createStackNavigator } from 'react-navigation'

import Home from '../screens/home'
import Options from '../screens/options'
import Themes from '../screens/themes'

const optionsGeneral = {
  mode: 'modal',
  headerMode: 'none'
}

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options'
    }
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes'
    }
  }
})

export default createStackNavigator(
  {
    Home: {
      screen: HomeStack
    }
  },
  optionsGeneral
)
