import React from 'react';
import PropTypes from 'prop-types';
import productsData from '../../data/Products.json';
import SearchInput from '../SearchInput/SearchInput';
import Results from '../Results/Results';

import styles from './search-bar.scss';

class SearchBar extends React.Component {
  state = {
    value: '',
    results: []
  };

  clear() {
    this.setState({
      value: ''
    });
  }

  search(query) {
    if (query) {
      const lowerCase = query.toLowerCase();

      const results = productsData.filter(
        item => item.name.toLowerCase().match(lowerCase) !== null
      );

      this.setState({
        results: results
      });
    }
  }

  handleChange(e) {
    const { value } = e.target;

    this.setState({
      value: value
    });

    this.search(value);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <SearchInput
          placeholder="search products"
          value={this.state.value}
          onChange={e => {
            this.handleChange(e);
          }}
        />

        {this.state.value && (
          <Results
            results={this.state.results}
            onClear={() => {
              this.clear();
            }}
          />
        )}
      </div>
    );
  }
}

export default SearchBar;
