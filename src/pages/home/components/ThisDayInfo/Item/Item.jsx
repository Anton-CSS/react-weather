import React from 'react';

const Item = (props) => {
    const {icon, title, value} = props.props;
    return (
        <li className="info__item">
            <div className="info__img"><img src={icon} alt="icon"/></div>
            <p className="info__title">{title}</p>
            <p className="info__value">{value}</p>
        </li>
    );
};

export default Item;