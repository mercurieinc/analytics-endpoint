const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
}

// accountId: '143748189',
