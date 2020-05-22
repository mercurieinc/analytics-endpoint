const { google } = require('googleapis');

const { PRIVATE_KEY, CLIENT_EMAIL } = require('./config');

const scopes = [
    "https://www.googleapis.com/auth/analytics",
    "https://www.googleapis.com/auth/analytics.edit"
];


const jwt = new google.auth.JWT(
    CLIENT_EMAIL,
    null,
    PRIVATE_KEY,
    scopes
);

const analytics = google.analytics({
    version: "v3",
    auth: jwt
});

module.exports = {
    createWebProperty: async (accountId, apiKey, requestBody) => {
        const res = await analytics.management.webproperties.insert({
            accountId, 
            auth: jwt,
            key: apiKey, 
            requestBody 
        });

        return res.data;
    }
};
