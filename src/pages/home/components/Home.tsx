import React from 'react';
import s from './home.module.scss';
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import Days from "./Days/Days";

const Home = () => {
    return (
        <>
            <div className={s.home}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </>

    );
};

export default Home;