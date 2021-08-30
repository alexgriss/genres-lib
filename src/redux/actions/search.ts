import { Dispatch } from "redux";
import { getArtistTopTags } from "../../api";
import { REQUEST_ARTIST_TAGS, REQUEST_ARTIST_TAGS_SUCCESS } from "../types";

type SearchTagsPayload = {
  searchValue: string
}

export const searchTagsAction = (payload: SearchTagsPayload) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: REQUEST_ARTIST_TAGS,
    });
    const response = await getArtistTopTags(payload.searchValue)
    const data = await response.json()
    dispatch({
      type: REQUEST_ARTIST_TAGS_SUCCESS,
      payload: {
        tags: data.toptags.tag
      }
    })
  } catch (error) {
    console.log(error)
  }
}