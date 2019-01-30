// Module imports
import getConfig from 'next/config'
import Router from 'next/router'





// Local imports
import actionTypes from '../actionTypes'
import convertObjectToQueryParams from '../../helpers/convertObjectToQueryParams'
import { twitchAPI } from '../../services'





// Local constants
const {
  publicRuntimeConfig: {
    apis: {
      twitch: twitchCredentials,
    },
  },
} = getConfig()





const getData = () => async dispatch => {
  let response = null
  let success = false

  try {
    response = await twitchAPI.get('/helix/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('twitchAccessToken')}`,
      },
    })
    success = true
  } catch (error) {
    console.error(error)
  }

  dispatch({
    payload: response.data.data[0],
    status: success ? 'success' : 'error',
    type: actionTypes.GET_USER_DATA,
  })
}





const login = () => async () => {
  let response = null
  let success = false
  
  window.location = 'https://id.twitch.tv/oauth2/authorize' + convertObjectToQueryParams({
    client_id: twitchCredentials.clientID,
    redirect_uri: 'https://jpjx1z29rw.sse.codesandbox.io/twitch-authorize',
    response_type: 'token',
    scope: 'user:read:email',
  })
}





const logout = () => async dispatch => {
  localStorage.removeItem('twitchAccessToken')
  Router.push('/')

  dispatch({
    status: 'success',
    type: actionTypes.LOGOUT,
  })
}





export {
  getData,
  login,
  logout,
}