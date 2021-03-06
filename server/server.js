'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const allStocks = require('./data')

const tickers = [
  { name: "Apple", ticker: 'AAPL', exchange: 'NASDAQ' },
  { name: "Alphabetcd server", ticker: 'GOOGL', exchange: 'NASDAQ' },
  { name: "Microsoft", ticker: 'MSFT', exchange: 'NASDAQ' },
  { name: "Amazon.com Inc", ticker: "AMZN", exchange: 'NASDAQ' },
  { name: "Meta Platforms, Inc.", ticker: 'FB', exchange: 'NASDAQ' },
  { name: "Tesla", ticker: 'TSLA', exchange: 'NASDAQ' },
];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getSeconds());
}

function getQuotes(socket) {

  const quotes = tickers.map(ticker => ({
    ticker: ticker.ticker,
    exchange: ticker.exchange,
    price: randomValue(100, 300, 2),
    change: randomValue(0, 200, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  }));

  socket.emit('ticker', quotes); // функция emit задает событие 'ticker', quotes - доп. параметр события
}

function trackTickers(socket) {
  // run the first time immediately
  getQuotes(socket);

  // every N seconds
  const timer = setInterval(function () {
    getQuotes(socket);
  }, FETCH_INTERVAL);

  socket.emit('dispatch', allStocks)
  socket.on('disconnect', function () {
    clearInterval(timer);
    console.log("disconnection")
  });
}

const app = express();
app.use(cors()); // Добавление corse Middleware
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  }
});

// Endpoint на получение сообщений
app.get('/', function (req, res) {  // При заходе на страницу "/" выполняется function(req, res)
  res.sendFile(__dirname + '/index.html');  //В качестве res вызываем  файл index.html (__dirname - та же папка)
});

socketServer.on('connection', (socket) => {
  console.log("connection")
  // socket.emit("connect", 'connection is success')
  socket.on('start', () => {
    trackTickers(socket);
  });
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
