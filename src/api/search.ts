import { API_KEY, ROOT_API_URL } from "../constants";
import { artistGetTopTags } from "./methods";

export const getArtistTopTags = (artistName: string) => fetch(`${ROOT_API_URL}?api_key=${API_KEY}&method=${artistGetTopTags}&artist=${artistName}&format=json`)