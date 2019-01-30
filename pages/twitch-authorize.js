// Module imports
import firebase from '@firebase/app'
import React from 'react'
import Router from 'next/router'





export default class TwitchAuthorize extends React.Component {
  componentDidMount () {
    const { hash } = window.location
    
    if (!/access_token=\w+/.test(hash)) {
      return Router.replace('/')
    }
    
    const [, accessToken] = /access_token=(\w+)/.exec(hash)
    
    localStorage.setItem('twitchAccessToken', accessToken)
    window.location.hash = hash.replace(/access_token=\w+/, '').replace('#&', '#')
    
    Router.replace('/dashboard')
  }
  
  render () {
    return 'Loading...'
  }
}