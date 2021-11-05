import React from 'react';
import s from './header.module.scss';
import cloud from '../../assets/img/cloud.svg';
import drop from '../../assets/img/drop.svg';
import Select, { StylesConfig } from 'react-select';


const Header = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    const colourStyles = {
        control: (styles:any) => ({ ...styles,
            backgroundColor: ' rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            borderRadius:'10px',
        })
    }
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <img src={cloud} alt="logo" className={s.img}/>
                </div>
                <h2 className={s.title}>React weather</h2>
            </div>
            <div className={s.wrapper}>
                  <img src={drop} alt="drop" className={s.drop}/>
                  <Select options={options} className={s.select} styles={colourStyles}/>
            </div>
        </header>
    );
};

export default Header;