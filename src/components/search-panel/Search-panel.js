import './search-panel.scss';

import React, { Component } from 'react';

class SearchPanel extends Component {

    onUpdateSearch = (e) => {
        const search = e.target.value;
        sessionStorage.setItem('search', search)
        this.props.updateSearch(search)
    }

    render() {
        return (
            <input type="text"
            className='search-form'
            placeholder="Find by name..."
            value={ sessionStorage.getItem('search')}
            onChange={this.onUpdateSearch}/>
        );
    }
}

export default SearchPanel;
