import Cookies from 'js-cookie';
import { setIsLoadingState } from "@/redux/reducers/uiReducer";
import { logout as userLogout } from "@/redux/reducers/userReducer";

const logout = () => {
  return async (dispatch, getState) => {
    Cookies.remove('token')
    dispatch(userLogout());
  }
}
export {
  logout,
}