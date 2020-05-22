const { google } = require('googleapis');

const analytics = google.analytics("v3");



async function main() {
    const auth = new google.auth.GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/analytics.edit',

    });

    const authClient = await auth.getClient();

    google.options(auth, authClient);

    const res = await analytics.management.webproperties.insert({
        accountId: '143748189',
        requestBody: {
            name: 'examplepetstore',
            websiteUrl: 'https://examplepetstore.seller.ng'
        }
    });

    console.log(res.data);
}

main().catch(e => {
    console.error(e);
});


