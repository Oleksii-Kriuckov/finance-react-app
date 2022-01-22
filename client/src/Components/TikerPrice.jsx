import React, { useEffect, useState, useMemo, useContext } from 'react'
import { Context } from '../index';
import { observer } from 'mobx-react-lite'

const TikerPrice = observer(({children, el, arrPrev, ind, ...props }) => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [result, setResult] = useState(0);
    // const { tickers } = useContext(Context)

    const dateTime = (string) => {
        let ind1 = string.indexOf("T");
        let ind2 = string.indexOf(".");
        setDate(string.substr(0, ind1));
        setTime(string.substring(ind1 + 1, ind2));
    };

    const resultChange = () => {
        // if (arrPrev[ind].price) {
        // setResult(el.price / arrPrev[ind].price)
        // console.log(result);
        // }
    }

    useEffect(() => {
        dateTime(el.last_trade_time)
        resultChange()
    }, [el]);


   

    return (
        <div {...props} className='scoreboard px-3 py-1 justify-content-center'>
            <div className='text-start'>{el.ticker}</div>
            <div >{el.exchange}</div>
            <div >{el.price}</div>
            <div >{children}</div>
            <div >{el.change_percent}</div>
            <div >{time}</div>
            <div >{date}</div>
        </div>
    )
})

export default TikerPrice
