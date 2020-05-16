import { FETCH_Table_LIST } from '@/constants/actionTypes'

const defaultState = {
  data: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_Table_LIST:
      return {
        ...state
      }
  
    default:
      return state
  }
} 