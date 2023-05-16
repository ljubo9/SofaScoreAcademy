async function fetchQuestions(): Promise<any> {
    const response = await fetch('https://opentdb.com/api.php?amount=15');
    const data = await response.json();
    return data.results;
  }
  
  export { fetchQuestions };