import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import './Answer.scss';

const Answer = ({text, isCorrect, currentQue}) => {

    const [btnClass, setBtnClass] = useState();

    const clickHandler = () => {
        setBtnClass(isCorrect ? 'correct-ans' : 'incorrect-ans');
    };

    useEffect(() => {
        setBtnClass();
    },[currentQue]);

    return <Card onClick={clickHandler} className={`answer ${btnClass}`} >
        <p>{text}</p>
    </Card>
};

export default Answer;
