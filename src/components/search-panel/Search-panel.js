import './search-panel.scss';

import React, { Component } from 'react';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: localStorage.getItem('search') ? localStorage.getItem ('search'):''
        }
    }

    
    onUpdateSearch = (e) =>{
        const search = e.target.value;
        this.setState({search});
        localStorage.setItem('search', search)
        this.props.updateSearch(localStorage.getItem('search'))
        
    }
    
    render(){
        return (
            <input type="text"
            className='search-form'
            placeholder="Find by name..." 
            value={this.state.search}
            onChange={this.onUpdateSearch}/>
        );
    }
}

export default SearchPanel;