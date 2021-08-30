import { Dispatch } from "redux";
import { getSession } from "../../api";
import { AUTH_REDIRECT_URL } from "../../constants";
import { GET_SESSION, GET_SESSION_SUCCESS, REQUEST_AUTH, REQUEST_AUTH_SUCCESS } from "../types";

export const requestAuthorizationAction = () => (dispatch: Dispatch) => {
  window.location.replace(AUTH_REDIRECT_URL)
  dispatch({
    type: REQUEST_AUTH
  });
}

type AuthSuccessPayload = {
  token: string
}

export const requestAuthorizationSuccessAction = (payload: AuthSuccessPayload) => (dispatch: Dispatch) => {
  dispatch({
    type: REQUEST_AUTH_SUCCESS,
    payload
  });
}

type GetSessionPayload = {
  token: string
}

export const getSessionAction = (payload: GetSessionPayload) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_SESSION
    })
    const response = await getSession(payload.token)
    const data = await response.json()
    localStorage.setItem('sessionKey', data.session.key)
    localStorage.setItem('user', data.session.name)
    dispatch({
      type: GET_SESSION_SUCCESS,
      payload: {
        sessionKey: data.session.key,
        user: data.session.name
      }
    })
  } catch (error) {
    console.log(error)
  }
}