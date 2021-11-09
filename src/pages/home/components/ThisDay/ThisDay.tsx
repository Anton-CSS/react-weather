import React, {FC} from 'react';
import './thisDay.scss';
import Sun from "./Sun";

const ThisDay: FC = () => {
    return (
        <div className="this-day">
            <div className="this-day__wrapper">
                <div className="this-day__box">
                    <div className="this-day__temperature">20 &deg;</div>
                    <div className="this-day__current">Сегодня</div>
                </div>
                <Sun />
            </div>
            <div className="this-day__time">Время: 21.54</div>
            <div className="this-day__city">Город: Москва</div>
        </div>
    );
};

export default ThisDay;