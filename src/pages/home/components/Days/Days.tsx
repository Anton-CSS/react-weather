import React from 'react';
import Tabs from "./Tabs";
import Card from "./Card";
import './days.scss'
const Days = () => {
    const info = [
        {dayWeek: 'Сегодня', number: '28 апреля', icon: '', temp: '+18', feeling:'+15', describe: 'облачно' }
    ]
    return (
        <>
            <Tabs/>,
            {info.map((day, index) => <Card props={day}/>)}
        </>
    );
};

export default Days;