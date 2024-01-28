import { useState } from 'react'
import './App.css'
import AutoSuggestion from './AutoSuggestion';

function App() {
  const [suggestionList, setSuggestionList] = useState([]);

  const getData = async (value) => {
    if(!value.length) {
      setSuggestionList([]);
      return;
    };

    try{
      const response = await fetch(`https://swapi.dev/api/planets/?search=${encodeURIComponent(value)}`);
      const data = await response.json();
      setSuggestionList(data.results);
    } catch (err) {
      console.error(err);
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

  const callApi = debounce(getData, 5000);
  
  return (
    <>
      <AutoSuggestion 
        getData = {callApi}
        suggestionList= {suggestionList}
        showSuggestion={true}
      />
    </>
  )
}

export default App
