import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';

class DogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            breed: "",
            dob: "",
            size: "",
            weight: "",
            energy: 1,
            vaccinations: false,
            location: ""
        }
        this.handleDOB = this.handleDOB.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.props.currentUserId
        this.state[user] = user
        this.props.createDog(this.state);
    }

    handleCheckBox(e) {
        return e => {
            this.setState({
                vaccinations: e.target.checked
            })
        }
    }


    handleDOB(day) {
        this.setState({
            dob: day.toLocaleDateString()
        })
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
        return (
            <div className="dog-form-container">
                <div className="dog-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Name
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                        </label>
                        <label>Location
                            <select value={this.state.location}>
                                <option onChange={this.update('location')} value="New York">New York</option>
                                <option onChange={this.update('location')} value="San Francisco">San Francisco</option>
                                <option onChange={this.update('location')} value="Seattle">Seattle</option>
                                <option onChange={this.update('location')} value="Washington D.C.">Washington D.C.</option>
                            </select>
                        </label>
                        <label>Breed
                            <input
                                type="text"
                                value={this.state.breed}
                                onChange={this.update('breed')}
                            />
                        </label>
                        <label>Date of Birth
                            <DayPickerInput
                                placeholder='Select date'
                                onDayChange={day => this.handleDOB(day)}
                            />
                        </label>
                        <label>Size
                            <select value={this.state.size}>
                                <option onChange={this.update('size')} value="Small">Small</option>
                                <option onChange={this.update('size')} value="Medium">Medium</option>
                                <option onChange={this.update('size')} value="Large">Large</option>
                                <option onChange={this.update('size')} value="Wumbo">Wumbo</option>
                            </select>

                        </label>
                        <label>Weight
                            <input
                                type="text"
                                value={this.state.weight}
                                onChange={this.update('weight')}
                            />
                        </label>
                        <label>Energy Level
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="1">1</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="2">2</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="3">3</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="4">4</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="5">5</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="6">6</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="7">7</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="8">8</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="9">9</input>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="10">10</input>
                        </label>
                        
                        <label>Vaccinations
                            <input 
                                type="checkbox" 
                                name="vaccinations" 
                                checked={this.state.vaccinations} 
                                onChange={this.handleCheckBox}/>
                        </label>

                        <input type='submit' value='Submit'/>

                    </form>

                </div>
            </div>
        )
    }
}

export default DogForm;