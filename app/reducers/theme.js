import { CHANGE_PRIMARY_COLOR } from '../actions/theme'

import { theme } from '../config/theme'

const initialState = {
  primaryColor: theme.color.blue
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color
      }

    default:
      return state
  }
}
