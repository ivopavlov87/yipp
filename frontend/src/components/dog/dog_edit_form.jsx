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
        const dogId = this.props.match.params.dogId
        this.props.updateDog(this.state).then(() => {
            if (Object.keys(this.props.errors).length === 0) {
                this.props.history.push(`/dogs/${dogId}`);
            }
        });        
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

    renderErrors() {
    const errors = Object.values(this.props.errors)
    const dogErrors = errors.map((error, i) => {
        return <li key={`error-${i}`}>
            {error}
          </li>
    })
    return dogErrors
  }

    render() {
        return (
            <div>
                <NavBarContainer /> 
                <div className="dog-form-container">
                    <div className="dog-form-title">
                        Edit your dog's profile
                    </div>
                    <div className="dog-form">
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
                                <select className="select-input" value={this.state.gender} onChange={this.update('gender')}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                          
                            <div className="dog-form-fields">
                                <h1>Location</h1>
                                <select className="select-input" value={this.state.location} onChange={this.update('location')}>
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
                                    onDayChange={day => this.handleDOB(day)}
                                />
                            </div>
                         
                            <div className="dog-form-fields">
                                <h1>Size</h1>
                                <select className="select-input" value={this.state.size} onChange={this.update('size')}>
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
                                <div className='radio-input'>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="1" checked={this.state.energy === '1'} /><label>1</label>
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="2" checked={this.state.energy === '2'} /><label>2</label> 
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="3" checked={this.state.energy === '3'} /><label>3</label> 
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="4" checked={this.state.energy === '4'} /><label>4</label>  
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="5" checked={this.state.energy === '5'} /><label>5</label>  
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="6" checked={this.state.energy === '6'} /><label>6</label>  
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="7" checked={this.state.energy === '7'} /><label>7</label>  
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="8" checked={this.state.energy === '8'} /><label>8</label>  
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="9" checked={this.state.energy === '9'} /><label>9</label>  
                                    </div>
                                    <div className='radio-option'>
                                        <input type="radio" name="energyLevel" onChange={this.update('energy')} value="10" checked={this.state.energy === '10'}/><label>10</label> 
                                    </div>
                            </div>
                            </div>
                         
                            <div className="dog-form-fields">
                                <h1>Vaccinated?</h1>
                                <input
                                    type="checkbox"
                                    name="vaccinations"
                                    checked={this.state.vaccinations}
                                    onChange={this.handleCheckBox} />
                            </div>

                            <div className="dog-form-errors">{this.renderErrors()}</div>
            
                            <input className='dog-form-submit-btn' type='submit' value='Submit' />

                        </form>

                    </div>
                </div>
            </div>
        )
    }
    
}

export default withRouter(DogEditForm);