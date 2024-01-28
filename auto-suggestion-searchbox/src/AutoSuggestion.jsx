import React, { useState } from "react";

const AutoSuggestion = (props) => {
  const {
    id = "",
    name = "",
    placeholder = "",
    getData = () => {},
    showSuggestion = true,
    suggestionList = []
  } = props;

  const [query, setQuery] = useState('');
  const handleQuery = (e) => {
    const { value, name } = e.target;
    setQuery(value);
    getData(value, name);
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

      {
        showSuggestion && <div className="suggestion-area"> 
            <h1>Render Suggestion</h1>
            {
                suggestionList.map(elem => {
                    return (
                        <div key={elem.name}>{elem.name}</div>
                    )
                })
            }
        </div>
      }
    </div>
  );
};

export default AutoSuggestion;
