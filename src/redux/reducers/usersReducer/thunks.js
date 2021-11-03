import { setIsFetching, setUser } from './actions'
import { usersAPI } from '../../../api/usersAPI/usersAPI'
import { checkAccessTokenPresent } from '../../../helpers/checkAccessTokenPresent'
//////////////////////////////////////////////////

export const getUserFromAccessToken = () => async dispatch => {
  dispatch(setIsFetching(true))
  const token = checkAccessTokenPresent()
  if (token) {
    let response = await usersAPI.getUserByAccessToken(token)
    dispatch(setIsFetching(false))
    dispatch(setUser(response.data))
  }
}
