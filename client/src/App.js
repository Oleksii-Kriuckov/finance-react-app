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
  const prevArray = useSelector( state => state.prevArray)
  const currentArray = useSelector( state => state.currentArray)
  // const [res, setRes] = useState([])
  const [result, setResult] = useState(0);


  useEffect(() => {
    const socket = io.connect('http://localhost:4000');
    socket.emit('start');
    socket.on('ticker', function (response) {
      const resp = (Array.isArray(response) ? response : [response]);
      dispath({type: "Change_Current_Array", payload: resp});
      // setRes(resp);
      // tickers.setResponce(resp)
      // console.log(resp);
      // socket.on('connect', function(messege){console.log(messege);})
    })
  }, []);

  const tickersArray = useMemo(() => {
    dispath({type: "Change_Prev_Array", payload: currentArray});
    if (prevArray[0]) {
      setResult(currentArray[0].price - prevArray[0].price);
    }
  }, [currentArray]);

  return (
    <div className="App " >

      <Header />
      {currentArray.map((el, ind) =>
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
