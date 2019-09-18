import React from 'react';

class DogIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchDogs();
    }

    render() {

        return (
            <div>

            </div>
        )
    }
}

export default DogIndex;