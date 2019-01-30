// Module imports
import axios from 'axios'
import getConfig from 'next/config'





// Component constants
const { publicRuntimeConfig } = getConfig()
const { twitch: twitchCredentials } = publicRuntimeConfig.apis





const twitchAPI = axios.create({
  baseURL: twitchCredentials.url,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': twitchCredentials.clientID,
  },
})





export { twitchAPI }