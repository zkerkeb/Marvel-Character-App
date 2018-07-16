import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import StackNavigator from './app/config/routes'
import { persistor, store } from './app/config/store'
import { theme } from './app/config/theme'

import { PersistGate } from 'redux-persist/lib/integration/react'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StackNavigator />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    )
  }
}
