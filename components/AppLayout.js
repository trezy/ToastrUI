// Style imports
import '../scss/reset.scss'
import '../scss/libraries.scss'
import '../scss/app.scss'





// Module imports
import Error from 'next/error'
import NProgress from 'nprogress'
import React from 'react'
import Router from 'next/router'





// Local imports
import { Banner } from '.'





NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', () => NProgress.done())





class AppLayout extends React.Component {
  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  static async getInitialProps ({ Component, ctx }) {
    const {
      asPath,
      isServer,
      query,
    } = ctx

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let statusCode = 200

    if (ctx.res) {
      ({ statusCode } = ctx.res)
    }

    return {
      statusCode,
      pageProps: {
        asPath,
        isServer,
        query,
        ...pageProps,
      },
    }
  }

  render () {
    const {
      Component,
      pageProps,
      statusCode,
    } = this.props

    return (
      <div role="application">
        <link
          href={`//fonts.googleapis.com/css?family=${['Source Sans Pro'].join('|').replace(/\s/g, '+')}`}
          rel="stylesheet" />
        {(statusCode === 200) && (
          <>
            <Banner />
            
            <main>
              <Component {...pageProps} />
            </main>
            {/*<Footer />*/}
          </>
        )}

        {(statusCode !== 200) && (
          <main className="fade-in page error">
            <div className="page-content">
              <Error statusCode={statusCode} />
            </div>
          </main>
        )}
      </div>
    )
  }
}





export { AppLayout }