import React, { useEffect, useState, useMemo, useContext } from 'react'
import { Context } from '../index';
import { observer } from 'mobx-react-lite'
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const TikerData = observer(({ children, el, result, ind, ...props }) => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [changePercent, setChangePercent] = useState(0);
    const prevArray = useSelector(state => state.array)


    // const { tickers } = useContext(Context)

    const dateTime = (string) => {
        let ind1 = string.indexOf("T");
        let ind2 = string.indexOf(".");
        setDate(string.substr(0, ind1));
        setTime(string.substring(ind1 + 1, ind2));
    };

    const resultChange = (ind) => {
        setChangePercent(Math.round(result[ind] * 100 / (el.price - result[ind])))
    }

    useEffect(() => {
        dateTime(el.last_trade_time)
        resultChange(ind)
    }, [el]);




    return (
        <TransitionGroup>
            <div {...props} className='scoreboard px-3 py-1 justify-content-center'>
                <div className='text-start'>{el.ticker}</div>
                <div >{el.exchange}</div>
                <CSSTransition timeout={500} classNames="ticker_data_item"><div >{el.price}</div></CSSTransition>

                
                    <div style={{ background: children[ind] > 0 ? 'rgb(0, 250, 0)' : (children[ind] < 0 ? 'rgb(250, 70, 70)' : 'transparent') }}>
                        {/* <CSSTransition timeout={500} classNames="ticker_data_item"></CSSTransition> */}
                            {/* <div></div> */}
                                {children[ind]}
                        
                    </div>
                
                <CSSTransition timeout={500} classNames="ticker_data_item">
                    <div style={{ background: children[ind] > 0 ? 'rgb(0, 250, 0)' : (children[ind] < 0 ? 'rgb(250, 70, 70)' : 'transparent') }}>
                        {changePercent + '%'}
                    </div>
                </CSSTransition>



                <div >{time}</div>
                <div >{date}</div>
            </div>
        </TransitionGroup>
    )
})

export default TikerData
