import React, { useEffect, useState, useMemo, useContext } from 'react'
import { Context } from '../index';
import { observer } from 'mobx-react-lite'

const TikerPrice = observer(({ el, res, ...props }) => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const { tickers } = useContext(Context)

    const dateTime = (string) => {
        let ind1 = string.indexOf("T");
        let ind2 = string.indexOf(".");
        setDate(string.substr(0, ind1));
        setTime(string.substring(ind1 + 1, ind2));
    };
    const result = () => {
        
    }

    useEffect(() => {
        dateTime(el.last_trade_time)
    }, [el]);

    const tickersArray = useMemo(() => {
        // tickers.responce.map(elem => 
        //     console.log(elem.price)
        //     )
        // return tickers.setArrTickers();
    }, [] );
   

    return (
        <div {...props} className='scoreboard px-3 py-1 justify-content-center'>
            <div className='text-start'>{el.ticker}</div>
            <div >{el.exchange}</div>
            <div >{el.price}</div>
            <div >{el.change}</div>
            <div >{el.change_percent}</div>
            <div >{time}</div>
            <div >{date}</div>
        </div>
    )
})

export default TikerPrice
