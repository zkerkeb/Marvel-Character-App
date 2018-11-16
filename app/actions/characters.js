import axios from 'axios'
import privateKey from '../../secretApi'
import md5 from 'md5'

export const GET_CHARACTERS = 'GET_CHARACTERS'
export const GET_CHARACTER = 'GET_CHARACTER'
export const PENDING = 'PENDING'

export const pending = () => ({
  type: PENDING
})

export const allCharactersDisplay = characters => ({
  type: GET_CHARACTERS,
  payload: characters
})

export const oneCharacterDisplay = characters => ({
  type: GET_CHARACTER,
  payload: characters
})

export const getCharacters = (offset = 0) => dispatch => {
  const publicKey = 'fb999626a634fc04a24a8db27a08a578'
  const TimeStamp = new Date().getMilliseconds()
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`)
  const generatedUrl = 'https://gateway.marvel.com//v1/public/characters'
  axios({
    method: 'GET',
    url: generatedUrl,
    params: {
      ts: TimeStamp,
      apikey: publicKey,
      hash: hash,
      offset: offset
    },
    Headers: {
      Accept: '*/*'
    }
  })
    .then(res => {
      console.log('redux', res)
      dispatch(
        allCharactersDisplay({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      )
    })
    .catch(err => console.log(err))
}

export const getCharacter = characterId => dispatch => {
  console.log(characterId)
  const publicKey = 'fb999626a634fc04a24a8db27a08a578'
  const TimeStamp = new Date().getMilliseconds()
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`)
  const generatedUrl = `https://gateway.marvel.com//v1/public/characters/${characterId}`
  axios({
    method: 'GET',
    url: generatedUrl,
    params: {
      ts: TimeStamp,
      apikey: publicKey,
      hash: hash
    },
    Headers: {
      Accept: '*/*'
    }
  })
    .then(res => {
      console.log('redux', res)
      dispatch(oneCharacterDisplay(res.data.data.results[0]))
    })
    .catch(err => console.log(err))
}
