require('dotenv').config();

const fetch = require('node-fetch');
const URL = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.GOOGLE_FONT_DEVELOPER_KEY}`;

exports.getResponse = (req, res) => {
  fetch(URL)
    .then(response =>
      response.status < 400 ? response : Promise.reject(response)
    )
    .then(response => response.json())
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(`${err.message} while fetching ${URL}`);
      res.status(500).json(err);
    });
};
