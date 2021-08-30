import { ActionType } from "../../types";
import { GET_SESSION_SUCCESS, REQUEST_AUTH_SUCCESS } from "../types";

const INITIAL_STATE = {
  token: null,
  sessionKey: localStorage.getItem('sessionKey'),
  user: localStorage.getItem('user')
}

export const authReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case REQUEST_AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      }
    case GET_SESSION_SUCCESS:
      return {
        ...state,
        sessionKey: action.payload.sessionKey,
        user: action.payload.user
      }
    default:
      return INITIAL_STATE;
  }
}