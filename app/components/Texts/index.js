import styled from 'styled-components/native'

const CharacterName = styled.Text`
  color: ${props => props.theme.color.red};
  font-family: 'Gotham-Bold';
  font-size: 16px;
  line-height: 20px;
  padding-left: 5px;
`

const CharacterDescription = styled.Text`
  color: ${props => props.theme.color.black};
  font-family: 'Gotham-Light';
  font-size: 12px;
  display: flex;
  flex: 1;
  padding: 5px;
`
const LittleLink = styled.Text`
  color: ${props => props.theme.color.red};
  font-family: 'Gotham-Light';
  font-size: 10px;
  display: flex;
  padding: 5px;
`

export { CharacterDescription, CharacterName, LittleLink }
