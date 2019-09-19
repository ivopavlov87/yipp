import React from 'react';
// import PostBox from './post_box';

class PostCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      // newPost: "",
      temperamentRating: 0,
      // authorName: this.props.currentUser.username
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let post = {
      text: this.state.text,
      temperamentRating: this.state.temperamentRating,
      // authorName: this.props.currentUser.username
    };

    this.props.composePost(post) // .then(() => this.props.history.push)('/posts');
    this.setState({ text: '', temperamentRating: 0 });
    this.props.history.push('/posts');
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            
            <input type="textarea"
              value={this.state.text}
              onChange={this.updateText()}
              placeholder="Write your post..."
            />
            <div className="temperament-rating-radio">
              <input type="radio" value="1" name="temperamentRating" onChange={this.updateRating()} />1
              <input type="radio" value="2" name="temperamentRating" onChange={this.updateRating()} />2
              <input type="radio" value="3" name="temperamentRating" onChange={this.updateRating()} />3
              <input type="radio" value="4" name="temperamentRating" onChange={this.updateRating()} />4
              <input type="radio" value="5" name="temperamentRating" onChange={this.updateRating()} />5
              <input type="radio" value="6" name="temperamentRating" onChange={this.updateRating()} />6
              <input type="radio" value="7" name="temperamentRating" onChange={this.updateRating()} />7
              <input type="radio" value="8" name="temperamentRating" onChange={this.updateRating()} />8
              <input type="radio" value="9" name="temperamentRating" onChange={this.updateRating()} />9
              <input type="radio" value="10" name="temperamentRating" onChange={this.updateRating()} />10
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        {/* <PostBox text={this.state.newPost} /> */}
      </div>
    )
  }
}

export default PostCompose;