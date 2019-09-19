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
            energy: 5,
            vaccinations: false,
            location: ""
        }
        this.handleDOB = this.handleDOB.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.props.currentUserId
        const newState = Object.assign({}, this.state)
        newState[user] = user
        this.props.createDog(newState);
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
                        <label>Name: 
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                        </label>
                        <br />
                        <label>Location:
                            <select value={this.state.location} onChange={this.update('location')}>
                                <option value="New York">New York</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="Seattle">Seattle</option>
                                <option value="Washington D.C.">Washington D.C.</option>
                            </select>
                        </label>
                        <br />
                        <label>Breed:
                            <input
                                type="text"
                                value={this.state.breed}
                                onChange={this.update('breed')}
                            />
                        </label>
                        <br />
                        <label>Date of Birth:
                            <DayPickerInput
                                placeholder='Select date'
                                onDayChange={day => this.handleDOB(day)}
                            />
                        </label>
                        <br />
                        <label>Size:
                            <select value={this.state.size} onChange={this.update('size')}>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="Wumbo">Wumbo</option>
                            </select>
                        </label>
                        <br />
                        <label>Weight:
                            <input
                                type="text"
                                value={this.state.weight}
                                onChange={this.update('weight')}
                            />
                        </label>
                        <br />

                        <div>Energy Level:</div>
                            <label>
                                <input type="radio" name="energyLevel" 
                                    onChange={this.update('energy')} 
                                    value="1" 
                                    checked={this.state.energy === '1'} />1
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="2" checked={this.state.energy === '2'} />2
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="3" checked={this.state.energy === '3'} />3
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="4" checked={this.state.energy === '4'} />4
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="5" checked={this.state.energy === '5'} />5
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="6" checked={this.state.energy === '6'} />6
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="7" checked={this.state.energy === '7'} />7
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="8" checked={this.state.energy === '8'} />8
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="9" checked={this.state.energy === '9'} />9
                            </label>
                            <label>
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="10" checked={this.state.energy === '10'}/>10
                            </label>
                        <br />
                        <label>Vaccinations:
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