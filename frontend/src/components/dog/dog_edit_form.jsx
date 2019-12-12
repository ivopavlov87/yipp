import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import "react-day-picker/lib/style.css"

import { withRouter } from 'react-router-dom'

import './assets/dog-form.css';
import NavBarContainer from '../nav/navbar_container';

class DogEditForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.dog;

        this.handleDOB = this.handleDOB.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchDog(this.props.match.params.dogId);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.updateDog(this.state);
        this.props.history.push('/profile/dogs');
    }

    handleCheckBox(e) {
        this.setState({
            vaccinations: e.currentTarget.checked
        });
    }

    handleDOB(day) {
        this.setState({
            dob: day.toLocaleDateString()
        });
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    render() {
        return (
            <div>
                <NavBarContainer /> 

                <div className="dog-form-container">
                    <div className="dog-form">
                        <div className="dog-form-title">
                            Edit your dog's profile:
                        </div>
                        <form onSubmit={this.handleSubmit} className="dog-form-fields">
                            <div>Name:
                                <br/>
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                />
                            </div>
                            {/* <br/> */}
                            <div>Gender:
                                <br />
                                <select value={this.state.gender} onChange={this.update('gender')}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            {/* <br /> */}
                            <div>Location:
                                <br/>
                                <select value={this.state.location} onChange={this.update('location')}>
                                    <option value="New York">New York</option>
                                    <option value="San Francisco">San Francisco</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="Washington D.C.">Washington D.C.</option>
                                </select>
                            </div>
                            {/* <br /> */}
                            <div>Breed:
                                <br />
                                <input
                                    type="text"
                                    value={this.state.breed}
                                    onChange={this.update('breed')}
                                />
                            </div>
                            {/* <br /> */}
                            <div>Date of Birth:
                                <br />
                                <DayPickerInput
                                    placeholder='Select date'
                                    onDayChange={day => this.handleDOB(day)}
                                />
                            </div>
                            {/* <br /> */}
                            <div>Size:
                                <br />
                                <select value={this.state.size} onChange={this.update('size')}>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                    <option value="Wumbo">Wumbo</option>
                                </select>
                            </div>
                            {/* <br /> */}
                            <div>Weight:
                                <br />
                                <input
                                    type="text"
                                    value={this.state.weight}
                                    onChange={this.update('weight')}
                                />
                            </div>
                            {/* <br /> */}
                            <div>Energy Level:
                                <br />
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="1" checked={this.state.energy === '1'} />1&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="2" checked={this.state.energy === '2'} />2&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="3" checked={this.state.energy === '3'} />3&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="4" checked={this.state.energy === '4'} />4&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="5" checked={this.state.energy === '5'} />5&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="6" checked={this.state.energy === '6'} />6&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="7" checked={this.state.energy === '7'} />7&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="8" checked={this.state.energy === '8'} />8&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="9" checked={this.state.energy === '9'} />9&nbsp;&nbsp;
                                <input type="radio" name="energyLevel" onChange={this.update('energy')} value="10" checked={this.state.energy === '10'} />10
                            </div>
                            {/* <br /> */}
                            <div>Vaccinated? &nbsp;&nbsp;
                                <input
                                    type="checkbox"
                                    name="vaccinations"
                                    checked={this.state.vaccinations}
                                    onChange={this.handleCheckBox} />
                            </div>
                            <br />
                            <input type='submit' value='Submit' />

                        </form>

                    </div>
                </div>
            </div>
        )
    }
    
}

export default withRouter(DogEditForm);