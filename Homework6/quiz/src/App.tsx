import React from 'react';
import { Heading } from './components/Heading';
import QuizComponent from './Questions';



function App() {
  return (
    <>
      <Heading>
        Trivia Quiz
      </Heading>
      <QuizComponent/>
    </>
  );
}

export default App;
