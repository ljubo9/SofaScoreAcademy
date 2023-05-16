import React, { useEffect, useState } from 'react';
import { fetchQuestions } from './api';
import { Container, List, SubmitButton, Item, Result } from './components/QuestionStyled';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

function QuizComponent() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswerSubmit = () => {
  const currentQuestion = questions[currentQuestionIndex];

  if (userAnswer.toLowerCase() === currentQuestion.correct_answer.toLowerCase()) {
    setFeedback('Correct!');
  } else {
    setFeedback('Incorrect!');
  }

  setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  setUserAnswer('');
};


  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container>
      {currentQuestion ? (
        <>
          <h2>{currentQuestion.question}</h2>
          <List>
            {currentQuestion.incorrect_answers.map((answer, index) => (
              <Item key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  checked={userAnswer === answer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                {answer}
              </Item>
            ))}
          </List>
          <SubmitButton onClick={handleAnswerSubmit}>Submit</SubmitButton>
          <Result>{feedback}</Result>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </Container>
  );
}

export default QuizComponent;
