import { useState } from 'react'
import './App.css'
import AutoSuggestion from './AutoSuggestion';

function App() {
  const [suggestionList, setSuggestionList] = useState([]);
  const [showError, setShowError] = useState(false);

  const getData = async (value) => {
    if(!value.length) {
      setSuggestionList([]);
      return;
    };

    try{
      const response = await fetch(`https://swapi.dev/api/people/?search=${encodeURIComponent(value)}`);
      const data = await response.json();
      setSuggestionList(data.results);
    } catch (err) {
      setShowError(true);
      setSuggestionList([]);
    }
  }

  const debounce = (callback, delay) => {
    let timer = null;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay)
    }
  }

  const callApi = debounce(getData, 400);

  return (
    <>
      <AutoSuggestion 
        getData = {callApi}
        suggestionList= {suggestionList}
        showSuggestion={suggestionList.length > 0}
        customErrorMessage={"Something went wrong"}
        showError={showError}
        setShowError={setShowError}
      />
    </>
  )
}

export default App
