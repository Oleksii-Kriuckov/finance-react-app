import React, { useEffect, useState } from 'react'


const Header = ({ elemObj }) => {
    // const [keys, setKeys] = useState([]);

    // const getKeys = (obj) => {
    //     setKeys(Object.keys(obj))
    // }

    // useEffect(() => {
    //     getKeys(elemObj);
    // }, [elemObj]);
    return (
        <div className='scoreboard px-3 py-1 justify-content-center'>
            <div className='headerItem'><span>ticker</span></div>
            <div className='headerItem'><span>exchange</span></div>
            <div className='headerItem'><span>price</span></div>
            <div className='headerItem'><span>change</span></div>
            <div className='headerItem'><span>change percent</span></div>
            <div className='d-flex flex-column' style={{width: '165px'}}>
                <div className='headerItem' ><span>Last Trade</span></div >
                <div className='d-flex time'>
                    <div className='headerItem' style={{width: '60px'}}><span>Time</span></div>
                    <div className='headerItem'  style={{width: '85px'}}><span>Date</span></div>
                </div>
            </div>

        </div>
    )
};

export default Header;
