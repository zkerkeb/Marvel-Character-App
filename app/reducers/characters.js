import { GET_CHARACTERS } from '../actions/characters'

const initialState = {
  list: [],
  offset: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        list: [...state.list, ...action.payload.list],
        offset: action.payload.offset
      }

    default:
      return state
  }
}
