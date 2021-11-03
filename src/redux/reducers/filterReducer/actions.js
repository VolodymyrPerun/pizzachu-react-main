import { SET_FILTER, SET_QUERY } from './constants'
//////////////////////////////////////////////////

export const setFilter = payload => ({ type: SET_FILTER, payload })
export const setSearchQuery = payload => ({ type: SET_QUERY, payload })
