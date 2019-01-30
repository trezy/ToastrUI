const withSass = require('@zeit/next-sass')

const { 
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  TWITCH_API_CLIENT_ID,
  TWITCH_API_URL,
} = process.env





module.exports = withSass({
  publicRuntimeConfig: {
    apis: {
      firebase: {
        apiKey: FIREBASE_API_KEY,
        authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
        databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
        projectId: FIREBASE_PROJECT_ID,
      },
      twitch: {
        clientID: TWITCH_API_CLIENT_ID,
        url: TWITCH_API_URL,
      },
    },
  },
})
