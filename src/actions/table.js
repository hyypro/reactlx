import { FETCH_Table_LIST, FETCH_Table_UPDATE } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'
import qs from 'qs'

export function tablelist (options) {
  return {
    type: FETCH_Table_LIST,
    payload: get(api.list)
  }
}

export function updateJson (options) {
  return {
    type: FETCH_Table_UPDATE,
    payload: options
  }
}

