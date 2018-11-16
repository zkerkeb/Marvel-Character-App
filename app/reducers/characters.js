import { GET_CHARACTER, GET_CHARACTERS } from '../actions/characters'

const initialState = {
  list: [],
  characterDetails: {},
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
    case GET_CHARACTER:
      return {
        ...state,
        characterDetails: action.payload
      }
    default:
      return state
  }
}
