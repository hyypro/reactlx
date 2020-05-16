import { FETCH_LOGIN_ACTION } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function loginAction (options) {
  return {
    type: FETCH_LOGIN_ACTION,
    payload: post(api.login, options)
  }
}

