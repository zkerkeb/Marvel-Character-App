import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const StyledList = styled.FlatList`
  margin-top: 20;
  padding: 15px;
  width: 100%;
`
export default class List extends React.PureComponent {
  static propTypes = {
    data: Proptypes.array,
    onEndReached: Proptypes.func,
    keyExtractor: Proptypes.func,
    renderItem: Proptypes.func
  }

  render() {
    const { data, onEndReached, keyExtractor, renderItem } = this.props

    return (
      <StyledList
        data={data}
        // Create a proper EmptyComponent
        // ListEmptyComponent={
        //   <ScalableCharacterName>No Data Found</ScalableCharacterName>
        // }
        initialNumToRender={20}
        onEndReached={() => onEndReached()}
        onEndReachedThreshold={0.5}
        // Do a header ?
        // ListHeaderComponent={ListHeader}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    )
  }
}
