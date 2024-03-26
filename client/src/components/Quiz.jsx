import { useRef, useState, useEffect,createRef } from 'react';
import './Quiz.css';

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const optionRefs = useRef([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/students/getQuiz')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setQuizData(data.data);
        } else {
          console.error('Error fetching quiz data:', data.message);
        }
      })
      .catch((error) => console.error('Error fetching quiz data:', error));
  }, []);

  useEffect(() => {
    if (quizData.length > 0) {
      setQuestion(quizData[index]);
      optionRefs.current = Array(4).fill().map((_, i) => optionRefs.current[i] || createRef());
    }
  }, [quizData, index]);

  const checkAnswer = (e, ans) => {
    console.log(ans)
    if (!lock) {
     
      if (question.answer === ans.toString()) {
       
        e.target.classList.add('correct');
        setLock(true);
        setScore((prevScore) => prevScore + 2);
      } else {
        e.target.classList.add('incorrect');
        setLock(true);
        optionRefs.current[parseInt(question.answer) - 1].current.classList.add('correct');
      }
    }
  };

  const nextQuestion = () => {
    if (lock && index < quizData.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(quizData[index + 1]);
      setLock(false);
      optionRefs.current.forEach((option) => {
        option.current.classList.remove('incorrect');
        option.current.classList.remove('correct');
      });
    } else if (lock && index === quizData.length - 1) {
      setResult(true);
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setQuestion(null);
    setLock(false);
    setScore(0);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Attempt the Quiz</h1>
      <hr />
      {result ? (
        <>
          <h2>You Scored {score} out of {quizData.length * 2}</h2>
          <button onClick={resetQuiz}>Reset</button>
        </>
      ) : (
        <>
          {question && (
            <>
              <h2>{index + 1}.{question.question}</h2>
              <ul>
                {['option1', 'option2', 'option3', 'option4'].map((optionKey, i) => (
                  <li
                    key={i}
                    ref={optionRefs.current[i]}
                    onClick={(e) => checkAnswer(e, i+1)}
                  >
                    {question[optionKey]}
                  </li>
                ))}
              </ul>
              <button onClick={nextQuestion}>Next</button>
              <div className='index'>{index + 1} of {quizData.length}</div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
