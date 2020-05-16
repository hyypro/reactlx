import { FETCH_LOGIN_ACTION } from '@/constants/actionTypes'

const defaultState = {
  username: ''
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGIN_ACTION:
      return {
        ...state
      }    
  
    default:
      return state
  }
}