import md5 from 'md5'
import { API_SECRET } from '../constants'

type GetApiSignatureArgs = {
  token: string
  apiKey: string
  method: string
}

export const getApiSignature = ({ token, apiKey, method }: GetApiSignatureArgs) => {
  console.log(`api_key${apiKey}method${method}token${token}${API_SECRET}`)
  return md5(`api_key${apiKey}method${method}token${token}${API_SECRET}`)
}