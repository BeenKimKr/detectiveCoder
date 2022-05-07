const mongoose = require('mongoose');
const { User } = require('./models/User');
const { Country } = require('./models/Country');
const { Survey } = require('./models/Survey');
const { Rank } = require('./models/Rank');
const { Bigmac } = require('./models/Bigmac');

const DB_URL = process.env.MONGODB_URL;

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('connected', () =>
  console.log('정상적으로 MongoDB 서버에 연결되었습니다.  ' + DB_URL)
);
db.on('error', (error) =>
  console.error('MongoDB 연결에 실패하였습니다...\n' + DB_URL + '\n' + error)
);

module.exports = { User, Country, Survey, Rank, Bigmac };
