import { FETCH_LOGIN_ACTION } from '@/constants/actionTypes'

const defaultState = {
  user_name: ''
}

export default function (state = defaultState, action) {
  let { user_name } = state
  switch (action.type) {
    case FETCH_LOGIN_ACTION:
      const { user_name } = action.payload.data
      return {
        ...state,
        user_name
      } 
    default:
      return state
  }
}