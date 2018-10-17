import React from "react";

import { func } from "prop-types";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  render() {
    const { search } = this.state;
    const { onSearch } = this.props;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSearch(search);
        }}
      >
        <input
          type="text"
          name="search"
          value={search}
          onChange={e =>
            this.setState({
              search: e.target.value
            })
          }
        />
        <input
          type="submit"
          value="Find me cards!"
          disabled={search.length < 3}
        />
      </form>
    );
  }
}

Search.propTypes = {
  onSearch: func.isRequired
};

export default Search;
