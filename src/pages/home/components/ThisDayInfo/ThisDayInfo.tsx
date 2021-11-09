import React, {FC} from 'react';
import  './thisDayInfo.scss';
import temp from '../../../../assets/img/temp.svg';
import wind from '../../../../assets/img/wind.svg';
import pressure from '../../../../assets/img/pressure.jpg';
import precipitation from '../../../../assets/img/precipitation.svg';
import bg from '../../../../assets/img/bg.jpg';
import Item from "./Item/Item";


const ThisDayInfo: FC = () => {
    const info = [
        {icon: temp, title: 'Температура', value: '20° - ощущается как 17°'},
        {icon: pressure, title: 'Давление', value: '765 мм ртутного столба - нормальное'},
        {icon: precipitation, title: 'Осадки', value: 'Без осадков'},
        {icon: wind, title: 'Ветер', value: '3 м/с юго-запад - легкий ветер'},
    ]
    return (
        <div className="info">
            <img src={bg} alt="background" className="info__bg"/>
            <ul className="info__list">
                {info.map((item, index) => <Item key={index} props={item}/>)}
            </ul>
        </div>
    );
};

export default ThisDayInfo;