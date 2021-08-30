import { ActionType } from "../../types";
import { REQUEST_ARTIST_TAGS_SUCCESS } from "../types";

const INITIAL_STATE = {
  tags: []
}

export const searchReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case REQUEST_ARTIST_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload.tags
      }
    default:
      return INITIAL_STATE;
  }
}