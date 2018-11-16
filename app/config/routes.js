import { createStackNavigator } from 'react-navigation'

import Home from '../screens/home'
import Options from '../screens/options'
import Themes from '../screens/themes'
import Entities from '../screens/entities'
import Entity from '../screens/entity'

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
  Entities: {
    screen: Entities,
    navigationOptions: {
      header: () => null
    }
  },
  Entity: {
    screen: Entity,
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
