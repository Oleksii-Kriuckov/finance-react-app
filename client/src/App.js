import './App.css';
import React, { useState, useEffect, useContext, useMemo } from 'react';
import TikerPrice from './Components/TikerPrice';
import io from 'socket.io-client';
import Header from './Components/Header';
import { observer } from 'mobx-react-lite'
import { Context } from './index';


const App = observer(() => {
  const [res, setRes] = useState([])
  const { tickers } = useContext(Context)
  const [arrTickers, setArrTickers] = useState([]);
  const [first, setfirst] = useState(0);
  // const [connect, setConnect] = useState(true)

  useEffect(() => {
    const socket = io.connect('http://localhost:4000');
    socket.emit('start');
    socket.on('ticker', function (response) {
      const resp = (Array.isArray(response) ? response : [response]);
      setRes(resp);
      // tickers.setResponce(resp)
      // console.log(resp);
      // socket.on('connect', function(messege){console.log(messege);})
    })
  }, []);

  const tickersArray = useMemo(() => {
    setArrTickers(res);
    if (arrTickers[0]) {
      console.log(res[0].price - arrTickers[0].price);
    }
  }, [res]);

  return (
    <div className="App " >

      <Header />
      {res.map((el, ind) =>
        <TikerPrice
          arrPrev={arrTickers}
          el={el}
          key={ind}
          ind={ind}
          style={{ background: ind % 2 === 0 ? "#eee" : "#ccc" }}
        ></TikerPrice>
      )}
    </div>
  );
})

export default App;
