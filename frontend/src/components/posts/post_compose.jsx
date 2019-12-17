import React from 'react';
// import { withRouter } from 'react-router-dom';

class PostCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      temperamentRating: "",
      user_id: "",
      authorName: "",
      dogName: this.props.dog.name,
      dogId: this.props.dog.id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.openModal('login');
    } else {
      let post = {
        text: this.state.text,
        temperamentRating: this.state.temperamentRating,
        user_id: this.props.currentUser.id,
        authorName: this.props.currentUser.username,
        dogName: this.props.dog.name,
        dogId: this.props.dog.id
      };
  
      this.props.composePost(post).then(() => {
        if (Object.keys(this.props.errors).length === 0) {
              this.props.history.push(`/dogs/${this.props.dog.id}`);
            } 
      });
      this.setState({
        text: "",
        temperamentRating: 0,
        user_id: this.props.currentUser.id,
        authorName: this.props.currentUser.username,
        dogName: this.props.dog.name,
        dogId: this.props.dog.id
      });
    }
  }

  updateText() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  updateRating() {
    return e => this.setState({
      temperamentRating: e.currentTarget.value
    });
  }

  renderErrors() {
    const errors = Object.values(this.props.errors)
    const postErrors = errors.map((error, i) => {
        return <li key={`error-${i}`}>
            {error}
          </li>
    })
    return postErrors
  }

  render() {
    return (
      <div className="dog-show-post-container">
        <form onSubmit={this.handleSubmit} className="dog-show-post-form">
          <div>
            Review this Dog:
            <br />
            <textarea rows="6" cols="60"
              value={this.state.text}
              onChange={this.updateText()}
              placeholder="Write your post..."
            />
            <br />
            Temperament Rating:
            <br />
            <div className="temperament-rating-radio">
              <input type="radio" value="1" name="temperamentRating" onChange={this.updateRating()} />1&nbsp;&nbsp;&nbsp;
              <input type="radio" value="2" name="temperamentRating" onChange={this.updateRating()} />2&nbsp;&nbsp;&nbsp;
              <input type="radio" value="3" name="temperamentRating" onChange={this.updateRating()} />3&nbsp;&nbsp;&nbsp;
              <input type="radio" value="4" name="temperamentRating" onChange={this.updateRating()} />4&nbsp;&nbsp;&nbsp;
              <input type="radio" value="5" name="temperamentRating" onChange={this.updateRating()} />5&nbsp;&nbsp;&nbsp;
              <input type="radio" value="6" name="temperamentRating" onChange={this.updateRating()} />6&nbsp;&nbsp;&nbsp;
              <input type="radio" value="7" name="temperamentRating" onChange={this.updateRating()} />7&nbsp;&nbsp;&nbsp;
              <input type="radio" value="8" name="temperamentRating" onChange={this.updateRating()} />8&nbsp;&nbsp;&nbsp;
              <input type="radio" value="9" name="temperamentRating" onChange={this.updateRating()} />9&nbsp;&nbsp;&nbsp;
              <input type="radio" value="10" name="temperamentRating" onChange={this.updateRating()} />10&nbsp;
            </div>
            <div className="post-form-errors">{this.renderErrors()}</div>
            <input className='post-compose-sumit-btn' type="submit" value="Submit" />
          </div>
        </form>
        <br />
      </div>
    )
  }
}

export default PostCompose;