import React from 'react';

function SearchList(props) {
  let items = props.items.map( (item, index) =>
    <a key={'i'+index} href={'https://en.wikipedia.org/?curid=' + item.pageid} rel="noopener noreferrer" target="_blank">
      <li>
        <h1>{item.title}</h1>
        <p>{item.extract}</p>
      </li>
    </a>);

  return <ul>{items}</ul>;
}

export default SearchList;