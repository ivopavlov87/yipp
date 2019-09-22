import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchType: "dogname",
            searchValue: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchType = this.handleSearchType.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.searchType === 'dogname') {
            this.props.searchByDogname(this.state.searchValue);
        } else if (this.state.searchType === 'location') {
            this.props.searchByLocation(this.state.searchValue);
        } else if (this.state.searchType === 'breed') {
            this.props.searchByBreed(this.state.searchValue);
        }

        this.props.history.push('/dogs')
    }

    handleChange(e) {
        this.setState({ 
            searchValue: e.target.value 
        })
    }

    handleSearchType(e) {
        this.setState({ 
            searchType: e.target.value 
        })
    }
  
    render() {
        return (
            <div className="search-container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        value={this.state.searchValue}
                        placeholder='Search all dog friends...'
                        onChange={this.handleChange}
                    />
                   
                    <select value={this.state.searchType} onChange={this.handleSearchType}>
                        <option value="dogname">Dog Name</option>
                        <option value="breed">Breed</option>
                        <option value="location">Location</option>
                    </select>

                    <input type="submit" value="Search" />
                </form>

                
            </div>
        )
    }
}

export default withRouter(Search);