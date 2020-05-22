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
            accountId, //: '162011389',
            auth: jwt,
            key: apiKey, //: 'AIzaSyBbmat8_Gg0GTvR0C0txCGBulv8Pl1YIZc',
            requestBody // requestBody: {
            //     name: 'examplepetstore',
            //     websiteUrl: 'https://examplepetstore.seller.ng'
            // }
        });

        return res.data;
    }
};
