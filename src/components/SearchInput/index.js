import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchText: ''
    };
  }

  toggleState = () => {
    if (this.state.isOpen) {
      this.props.searchClear();
    }
    this.setState({ isOpen: !this.state.isOpen, searchText: '' });
  }

  inputChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchText !== '') {
      this.props.search(this.state.searchText);
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className={this.state.isOpen ? 'open' : ''} onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchText} onChange={this.inputChange} />
          <div className="eks" onClick={this.toggleState} />
        </form>
        {!this.state.isOpen && <p className="white-text" id="help">Click icon to search</p>} 
      </React.Fragment>
    );
  }
}

export default SearchInput;