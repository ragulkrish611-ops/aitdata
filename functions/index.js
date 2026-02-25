const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.checkWebsiteStatus = functions.https.onCall(async (data) => {
  const { url } = data;
  try {
    await fetch(url); // server ping, no CORS
    return { status: "LIVE" };
  } catch (err) {
    return { status: "DOWN" };
  }
});
