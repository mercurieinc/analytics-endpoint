const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { createWebProperty } = require('./analytics');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/createwebproperty/:accountId/:apiKey',async (req, res, next) => {
    try {
        const result = await createWebProperty(req.params.accountId, req.params.apiKey, req.body);

        console.log("result", result);
        res.json({
            trackingId: result.id
        })
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }

});

app.listen(30000, (err) => {
    if (err) {
        return err;
    }

    return console.log('server is listening on port 30000');
})
