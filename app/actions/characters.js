import axios from 'axios'
import privateKey from '../../secretApi'
import md5 from 'md5'

export const GET_CHARACTERS = 'GET_CHARACTERS'
export const PENDING = 'PENDING'

export const pending = () => ({
  type: PENDING
})

export const fetched = characters => ({
  type: GET_CHARACTERS,
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
        fetched({ list: res.data.data.results, offset: res.data.data.offset })
      )
    })
    .catch(err => console.log(err))
}
