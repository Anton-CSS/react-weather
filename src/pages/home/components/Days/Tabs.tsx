import React from 'react';

const Tabs = () => {
    return (
        <div className="tabs">
            <button className="tabs__week active">На неделю</button>
            <button className="tabs__month">На месяц</button>
            <button className="tabs__ten-days">На 10 дней</button>
            <button className="tabs__cancel">Отменить</button>
        </div>
    );
};

export default Tabs;