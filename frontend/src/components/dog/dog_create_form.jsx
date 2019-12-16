import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import "react-day-picker/lib/style.css"
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'moment/locale/it';

import './assets/dog-form.css';
import NavBarContainer from '../nav/navbar_container';


class DogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            breed: "",
            dob: "",
            size: "Small",
            weight: "",
            energy: 5,
            vaccinations: false,
            location: "New York",
            gender: "Male",
            images: []
        }

        this.handleDOB = this.handleDOB.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
   
        const userId = this.props.currentUserId
        const newState = Object.assign({}, this.state)
        newState['user'] = userId
        this.props.createDog(newState);
        this.props.history.push('/profile/dogs');
    }

    handleCheckBox(e) {
        this.setState({
            vaccinations: e.currentTarget.checked
        })
    }

    handleDOB(day) {
        this.setState({
            dob: day.toLocaleDateString()
        })
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    render() {
        return (
            <div>
            <NavBarContainer /> 
            <div className="dog-form-container">
                <div className="dog-form">
                    <div className="dog-form-title">
                        Add a new dog
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="dog-form-fields">
                            <h1>Name</h1> 
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                        </div>
                     
                        <div className="dog-form-fields">
                            <h1>Gender</h1>
                            <select value={this.state.gender} onChange={this.update('gender')}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
    
                        <div className="dog-form-fields">
                            <h1>Location</h1>
                            <select value={this.state.location} onChange={this.update('location')}>
                                <option value="New York">New York</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="Seattle">Seattle</option>
                                <option value="Washington D.C.">Washington D.C.</option>
                            </select>
                        </div>
                      
                        <div className="dog-form-fields">
                            <h1>Breed</h1>
                            <input
                                type="text"
                                value={this.state.breed}
                                onChange={this.update('breed')}
                            />
                        </div>
                       
                        <div className="dog-form-fields">
                            <h1>Date of Birth</h1>
                            <DayPickerInput
                                placeholder='Select date'
                                inputProps={{ readOnly: true }} 
                                onDayChange={day => this.handleDOB(day)}
                                formatDate={formatDate}
                                parseDate={parseDate}

                                dayPickerProps={{
                                    disabledDays: { after: new Date() },
                                }}
                            />
                        </div>

                        <div className="dog-form-fields">
                            <h1>Size</h1>
                            <select value={this.state.size} onChange={this.update('size')}>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="Wumbo">Wumbo</option>
                            </select>
                        </div>

                        <div className="dog-form-fields">
                            <h1>Weight</h1>
                            <input
                                type="text"
                                value={this.state.weight}
                                onChange={this.update('weight')}
                            />
                        </div>
                
                        <div className="dog-form-fields">
                            <h1>Energy Level</h1>
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="1" checked={this.state.energy === '1'} />1 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="2" checked={this.state.energy === '2'} />2 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="3" checked={this.state.energy === '3'} />3 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="4" checked={this.state.energy === '4'} />4 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="5" checked={this.state.energy === '5'} />5 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="6" checked={this.state.energy === '6'} />6 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="7" checked={this.state.energy === '7'} />7 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="8" checked={this.state.energy === '8'} />8 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="9" checked={this.state.energy === '9'} />9 &nbsp;
                            <input type="radio" name="energyLevel" onChange={this.update('energy')} value="10" checked={this.state.energy === '10'}/>10
                        </div>

                        <div className="dog-form-fields">
                            <h1>Vaccinated?</h1>
                            <input 
                                type="checkbox" 
                                name="vaccinations" 
                                checked={this.state.vaccinations} 
                                onChange={this.handleCheckBox}/>
                        </div>
                        
                        <input type='submit' value='Submit'/>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default DogForm;