import { useState } from 'react'
import './App.css'
import AutoSuggestion from './AutoSuggestion';

function App() {
  const [suggestionList, setSuggestionList] = useState([]);
  const getData = (value) => {
    console.log(value);
    if(!value.length) {
      setSuggestionList([]);
      return;
    };

    //api call : https://swapi.dev/api/people/?search=r2
    fetch(`https://swapi.dev/api/planets/?search=${encodeURIComponent(value)}`)
    .then(res => res.json())
    .then(data => setSuggestionList(data.results))
    .catch(err => console.error(err))
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
