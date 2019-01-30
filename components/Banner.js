// Module imports
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import React from 'react'





// Local imports
import { actions } from '../store'





// Local constants
const mapDispatchToProps = dispatch => bindActionCreators({
  login: actions.user.login,
  logout: actions.user.logout,
}, dispatch)
const mapStateToProps = ({ user }) => ({ user })





@connect(mapStateToProps, mapDispatchToProps)
class Banner extends React.Component {
  render () {
    const {
      login,
      logout,
      user,
    } = this.props
    
    return (
      <header role="banner">
        <img className="brand" />

        <nav>
          <ol>
            <li>
              <Link href="/">
                <a className="button link">Home</a>
              </Link>
            </li>

            <li>
              <Link href="features">
                <a className="button link">Features</a>
              </Link>
            </li>
          </ol>
        </nav>

        <menu
          className="user-menu"
          type="toolbar">
          {(!user.loggedIn) && (
            <button onClick={login}>
              Login
            </button>
          )}
          
          {(user.loggedIn) && (
            <button onClick={logout}>
              Logout
            </button>
          )}
        </menu>
      </header>
    )
  }
}





export { Banner }