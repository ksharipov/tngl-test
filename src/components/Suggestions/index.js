import React from 'react';

function Suggestions(props) {
  let suggestions = props.suggestions.map( (item, index) =>
    <a key={'s'+index} href={'https://www.google.com/search?q=' + item} target="_blank" rel="noopener noreferrer">
      {item}
    </a>);

  return <div className="suggestions"> {suggestions} </div>;
}

export default Suggestions;