import { FETCH_HOME_ACTION } from '@/constants/actionTypes'

export function changekeys (options) {
  return {
    type: FETCH_HOME_ACTION,
    payload: options
  }
}