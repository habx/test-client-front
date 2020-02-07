import { ApolloProvider } from '@apollo/react-hooks'
import React from 'react'

import { ThemeProvider, Provider } from '@habx/ui-core'

import { client } from './api/apollo'
import Setup from './Setup'

const App = () => {
  return (
    <ThemeProvider>
      <Provider>
        <ApolloProvider client={client}>
          <Setup />
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default App
