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
  const [activeIndex, setActiveIndex] = useState(-1)
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


//   const handleKeyDown = (e) => {
//     console.log(e.code)
//     if (e.code == "ArrowDown") {
//         if(activeIndex < suggestionList.length - 1) {
//             setActiveIndex((prevIndex) => prevIndex + 1);
//         }
//     } else if(e.code == "ArrowUp") {
//         if(activeIndex >= 1) {
//             setActiveIndex((prevIndex) => prevIndex - 1);
//         }
//     } else if(e.code == "Enter") {
//         const selectedItem = suggestionList.filter((elem, index) => index == activeIndex);
//         setSelectedList([...selectedList, ...selectedItem]);
//         setSelectedSet(new Set([...selectedSet, ...selectedItem]));
//     }
//   }

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
        // onKeyDown={handleKeyDown}
      />
      {showError && <p>{customErrorMessage}</p>}
      {showSuggestion && (
        <div className="suggestion-area">
          {suggestionList.map((elem, index) => {
            return !selectedSet.has(elem) ? (
              <div key={elem.name} onClick={() => handleSuggestionClick(elem)} style={{backgroundColor: `${activeIndex === index ? "red" :""}`}}>
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
