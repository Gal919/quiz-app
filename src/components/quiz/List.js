import { useState } from 'react';
import Button from '../UI/Button';
import './List.scss';
import Question from './Question';
import Answer from './Answer';

const List = ({ data }) => {
  const [currentQue, setCurrentQue] = useState(0);

  const clickHandler = () => {
    if (data[currentQue].incorrectAnswers.length + 1 === currentQue) {
      setCurrentQue(0);
    } else {
      setCurrentQue(currentQue + 1);
    }
  };

  const shuffleAns = (incorrectAns, correctAns) => {
    const incorrectWithKey = incorrectAns.map((v) => ({ v, isCorrect: false }));
    const correctWithKey = { v: correctAns, isCorrect: true };
    let ansArr = [];
    ansArr = [...incorrectWithKey, correctWithKey];

    ansArr.sort(() => Math.random() - 0.5);
    return ansArr;
  };

  return (
    <div className='list-container'>
      <Question text={data[currentQue].question} />
      {shuffleAns(
        data[currentQue].incorrectAnswers,
        data[currentQue].correctAnswer
      ).map((ans) => (
        <Answer
          text={ans.v}
          isCorrect={ans.isCorrect}
          currentQue={currentQue}
        />
      ))}
      <Button onClick={clickHandler}>Next</Button>
    </div>
  );
};

export default List;
