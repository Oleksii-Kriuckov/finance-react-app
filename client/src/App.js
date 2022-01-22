import './App.css';
import React, { useState, useEffect, useContext, useMemo } from 'react';
import TikerPrice from './Components/TikerPrice';
import io from 'socket.io-client';
import Header from './Components/Header';
import { observer } from 'mobx-react-lite'
import { Context } from './index';
import { useDispatch, useSelector } from 'react-redux';



const App = observer(() => {
  const dispath = useDispatch();
  const arrTickers = useSelector( state => state.array)
  const [res, setRes] = useState([])
  const [result, setResult] = useState(0);


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
    dispath({type: "Change_Array", payload: res});
    if (arrTickers[0]) {
      setResult(res[0].price - arrTickers[0].price);
    }
  }, [res]);

  return (
    <div className="App " >

      <Header />
      {res.map((el, ind) =>
        <TikerPrice
        result={result}
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
