// Module imports
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'



// Local imports
import { initStore } from '../store'
import { AppLayout } from '../components'





@withRedux(initStore)
class NextApp extends App {
  static getInitialProps (appProps) {
    return AppLayout.getInitialProps(appProps)
  }

  render () {
    const {
      store,
    } = this.props

    return (
      <Container>
        <Provider store={store}>
          <AppLayout {...this.props} />
        </Provider>
      </Container>
    )
  }
}





export default NextApp