import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    sort: 'all',
  };

  handleOnChange = (e) => {
    this.setState({ search: e.target.value});
    this.props.onSearchChange(e.target.value)
  }

  render() {
    
    return (
      <div className="center">
        <div className="row">
          <div className="input-field col s12">
            <input
              type="search"
              className="validate"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleOnChange}
            ></input>
          </div>
        </div>
        <div className="sort">
          <label>
            <input
              className="with-gap"
              name="sort"
              type="radio"
              data-type="all"
            ></input>
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="sort"
              type="radio"
              data-type="active"
            ></input>
            <span>Active</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="sort"
              type="radio"
              data-type="done"
            ></input>
            <span>Done</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
