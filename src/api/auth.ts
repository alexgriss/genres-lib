import { API_KEY, ROOT_API_URL } from "../constants";
import { authGetSession } from "./methods";
import { getApiSignature } from "./utils";

export const getSession = (token: string) => fetch(`${ROOT_API_URL}?api_key=${API_KEY}&api_sig=${getApiSignature({
  apiKey: API_KEY,
  token,
  method: authGetSession
})}&method=${authGetSession}&token=${token}&format=json`)