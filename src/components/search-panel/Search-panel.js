import './search-panel.scss';

import React, { Component } from 'react';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }
    
    render(){
        return (
            <input type="text"
            className='search-form'
            placeholder="Find by name..." 
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
        );
    }
}

export default SearchPanel;