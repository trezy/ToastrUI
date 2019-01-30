// Component imports
import actionTypes from '../actionTypes'
import initialState from '../initialState'




export default function (state = initialState.user, action) {
  const {
    payload,
    status,
    type,
  } = action

  switch (type) {
    case actionTypes.GET_USER_DATA:
      return {
        data: payload,
        loggedIn: true,
      }
      
    case actionTypes.LOGOUT:
      return {
        data: null,
        loggedIn: false,
      }
      
    default:
      return state
  }
}