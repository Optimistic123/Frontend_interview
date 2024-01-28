import React, { useState } from "react";

const AutoSuggestion = (props) => {
  const {
    id = "",
    name = "",
    placeholder = "",
    getData = () => {},
    showSuggestion = true,
    suggestionList = [],
    customErrorMessage = "",
    showError = false,
    setShowError 
  } = props;

  const [query, setQuery] = useState('');
  const handleQuery = (e) => {
    setShowError(false);
    const { value, name } = e.target;
    setQuery(value);
    getData(value, name);
  }

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
  }

  return (
    <div>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={query}
        onChange={handleQuery}
      />
      {showError && <p>{customErrorMessage}</p>}
      {
        showSuggestion && <div className="suggestion-area"> 
            <h1>Render Suggestion</h1>
            {
                suggestionList.map(elem => {
                    return (
                        <div key={elem.name} onClick={() => handleSuggestionClick(elem)}>{elem.name}</div>
                    )
                })
            }
        </div>
      }
    </div>
  );
};

export default AutoSuggestion;
