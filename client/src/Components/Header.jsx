import React, { useEffect, useState } from 'react'


const Header = ({ elemObj}) => {
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
            <div className='headerItem'><span>Time</span></div>
            <div className='headerItem'><span>Date</span></div>
        </div>
    )
};

export default Header;
