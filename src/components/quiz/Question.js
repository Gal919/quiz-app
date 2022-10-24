import Card from '../UI/Card';
import './Question.scss';

const Question = ({text}) => {
    return <Card className='question'> 
        <p>{text}</p>
    </Card>
};

export default Question;
