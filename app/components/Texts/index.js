import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const generateFontSize = props => {
  return (parseInt(props.size) * width) / 400
}
const generateFontWeight = props => {
  if (props.bold) {
    return 'bold'
  } else {
    return 'normal'
  }
}

const generateMinHeight = generateFontSize + 2

const ScalableCharacterName = styled.Text`
  color: ${props => props.theme.color.red};
  display: flex;
  flex: 1;
  font-family: 'Gotham-Light';
  font-size: ${generateFontSize};
  font-weight: ${generateFontWeight};
  min-height: ${generateMinHeight};
  padding: 5px;
`

const CharacterDescription = styled.Text`
  color: ${props => props.theme.color.black};
  font-family: 'Gotham-Light';
  font-size: 12px;
  display: flex;
  flex: 5;
  padding: 5px;
`

export { CharacterDescription, ScalableCharacterName }
