import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchType: "dogname",
            searchValue: ""
        }
        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchByDogname(this.state.searchInput);
        this.props.searchByLocation(this.state.searchInput);
    }

    
    handleChange(e) {
        return (e) => {
            this.setState({ value: e.target.value })
        }    
    }

    handleSearchType(e) {
        return (e) => {
            this.setState({ searchType: e.target.value })
        }
    }
  
    render() {
        return (
            <div className="search-container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Search all dog friends...'
                        onChange={this.handleChange}
                    />

                    <button type="submit" value="submit"/>
                </form>
                <select value={this.state.searchType} onChange={this.handleSearchType}>
                    <option value="dogname">Dog Name</option>
                    <option value="breed">Breed</option>
                    <option value="location">Location</option>
                </select>
                
            </div>
        )
    }
}

export default Search;