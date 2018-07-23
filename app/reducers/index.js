import { combineReducers } from 'redux'

import theme from './theme'
import characters from './characters'

export default combineReducers({
  characters,
  theme
})
