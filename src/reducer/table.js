import { FETCH_Table_LIST } from '@/constants/actionTypes'

const defaultState = {
  users: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_Table_LIST:
  
      return {
        ...state,
        users: action.payload.users
      }
      
    default:
      return state
  }
} 