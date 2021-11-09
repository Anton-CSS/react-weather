import React, {FC} from 'react';
interface PropsDay {
    dayWeek: string;
    number: string;
    icon: string;
    temp: string;
    feeling: string;
    describe: string;
}

const Card : FC<any> = ({props}) => {

    const {dayWeek, number, icon, temp, feeling, describe} = props;
    return (
        <div>
            
        </div>
    );
};

export default Card;