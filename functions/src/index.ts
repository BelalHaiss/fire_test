import * as functions from 'firebase-functions';
export const addMessage = functions.https.onRequest((req, res) => {
  res.json({ dummy: process.env.DUMMY });
});
