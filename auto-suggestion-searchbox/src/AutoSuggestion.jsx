import React, { useRef, useState } from "react";

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
    setShowError,
    multipleSelect = false,
  } = props;

  const [query, setQuery] = useState("");
  const [selectedSet, setSelectedSet] = useState(new Set([]));
  const [selectedList, setSelectedList] = useState([]);
  const inputRef = useRef();
  const handleQuery = (e) => {
    setShowError(false);
    const { value, name } = e.target;
    setQuery(value);
    getData(value, name);
  };

  const handleSuggestionClick = (suggestion) => {
    if (!multipleSelect) {
      setQuery(suggestion.name);
    } else {
      setQuery("");
      inputRef.current.focus();
      setSelectedList([...selectedList, suggestion]);
      setSelectedSet(new Set([...selectedSet, suggestion]));
    }
  };

  return (
    <div>
      <div className="pill">
        {selectedList.map((pill) => {
          return <p key={pill.name}>{pill.name}</p>;
        })}
      </div>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={query}
        onChange={handleQuery}
        ref={inputRef}
      />
      {showError && <p>{customErrorMessage}</p>}
      {showSuggestion && (
        <div className="suggestion-area">
          {suggestionList.map((elem) => {
            return !selectedSet.has(elem) ? (
              <div key={elem.name} onClick={() => handleSuggestionClick(elem)}>
                {elem.name}
              </div>
            ) : (
              <></>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AutoSuggestion;
