import React, { Component } from 'react';
import RandomWikiPage from '../../components/RandomWikiPage';
import SearchInput from '../../components/SearchInput';
import SearchList from '../../components/SearchList';
import Suggestions from '../../components/Suggestions';
import { connect } from 'react-redux';
import { search, searchClear } from '../../actions/searchActions';

class WikiSearch extends Component {
  render() {
    let searchResult = this.props.searchReducer.searchResult;
    let suggestions = this.props.searchReducer.suggestions;
    return (
      <div className={'wrapper '+ (searchResult.length === 0 ? 'fullHeight' : '')}>
        <RandomWikiPage />
        <SearchInput search={this.props.search} searchClear={this.props.searchClear}/>
        <Suggestions suggestions={suggestions}/>
        <SearchList items={searchResult}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  search: (searchText) => dispatch(search(searchText)),
  searchClear: () => dispatch(searchClear())
});

export default connect(mapStateToProps, mapDispatchToProps)(WikiSearch);
