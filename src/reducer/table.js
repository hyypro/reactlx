import { FETCH_Table_LIST, FETCH_Table_UPDATE } from '@/constants/actionTypes'

const defaultState = {
  users: [],
  data: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_Table_LIST: 
      return {
        ...state,
        users: action.payload.users
      }
    case FETCH_Table_UPDATE:
      return {
       ...state,
       data: action.payload
      }
    default:
      return state
  }
} 