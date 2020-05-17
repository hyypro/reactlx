import { FETCH_HOME_ACTION } from '@/constants/actionTypes'

const defaultState = {
  keys: '2'
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_HOME_ACTION:
      return {
        ...state,
        keys: action.payload
      }
  
  
    default:
      return state
  }
}