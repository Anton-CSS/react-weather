import React from 'react';
import s from './home.module.scss';
import ThisDay from "./ThisDay/ThisDay";

const Home = () => {
    return (
        <div className={s.home}>
           <ThisDay/>
        </div>
    );
};

export default Home;