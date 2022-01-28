import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../CSS/Search.css"
import SearchMenu from './SearchMenu'

export class Search extends Component {
    render() {
        return (
            <div className="search-bar">
                    <Link to="SearchWindow" className="btn-search search">Search</Link>
            </div>
        )
    }
    
}

export default Search
