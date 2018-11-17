import React, { Component, Fragment } from 'react';
import QueryArtists from '../queries/QueryArtists';
import Paging from '../paging/Paging';

export default class ArtistSearch extends Component {

  state = {
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
    query: {

    }
  };

  onQueryItemChange = ({ target }) => {
    const { query } = this.state;
    this.setState({ currentPage: 1, query:{ ...query, [target.name]: target.value } });
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  render() {

    const { currentPage, totalPages, totalResults, query } = this.state;

    return (
      <Fragment>
        <h2>Search for Artists</h2>
        <QueryArtists query={query}
          onQueryItemChange={this.onQueryItemChange}
        />
        <Paging currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
          updatePage={this.updatePage}/>
      </Fragment>
    );
  }
}
