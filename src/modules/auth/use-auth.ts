import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSessionAction, requestAuthorizationAction, requestAuthorizationSuccessAction } from "../../redux/actions";
import { authTokenSelector, sessionKeySelector, userSelector } from "../../redux/selectors";

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(authTokenSelector)
  const sessionKey = useSelector(sessionKeySelector)
  const user = useSelector(userSelector)
  const tokenFromURL = new URLSearchParams(window.location.search).get('token')

  useEffect(() => {
    if (tokenFromURL) {
      dispatch(requestAuthorizationSuccessAction({
        token: tokenFromURL
      }))
    }
  }, [dispatch, tokenFromURL])

  useEffect(() => {
    if (token && !sessionKey) {
      dispatch(getSessionAction({
        token
      }))
    }
  }, [dispatch, sessionKey, token])

  useEffect(() => {
    if (tokenFromURL && sessionKey) {
      window.location.href = '/'
    }
  }, [sessionKey, tokenFromURL])

  const handleAuthorize = () => {
    dispatch(requestAuthorizationAction())
  }

  return {
    token,
    sessionKey,
    user,
    handleAuthorize
  }
}