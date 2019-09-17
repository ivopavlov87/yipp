import React from 'react';
import PostBox from './post_box';

class PostCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newPost: "",
      tempermentRating: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   // debugger;
  //   this.setState({ newPost: nextProps.newPost.text });
  // }

  handleSubmit(e) {
    e.preventDefault();
    let post = {
      text: this.state.text,
      tempermentRating: this.state.tempermentRating
    };

    this.props.composePost(post) // .then(() => this.props.history.push)('/posts');
    this.setState({ text: '', tempermentRating: 0 });
    this.props.history.push('/posts');
  }

  updateText() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  updateRating() {
    return e => this.setState({
      tempermentRating: e.currentTarget.value
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
            <div className="temperment-rating-radio">
              <input type="radio" value="1" name="tempermentRating" onChange={this.updateRating()} />1
              <input type="radio" value="2" name="tempermentRating" onChange={this.updateRating()} />2
              <input type="radio" value="3" name="tempermentRating" onChange={this.updateRating()} />3
              <input type="radio" value="4" name="tempermentRating" onChange={this.updateRating()} />4
              <input type="radio" value="5" name="tempermentRating" onChange={this.updateRating()} />5
              <input type="radio" value="6" name="tempermentRating" onChange={this.updateRating()} />6
              <input type="radio" value="7" name="tempermentRating" onChange={this.updateRating()} />7
              <input type="radio" value="8" name="tempermentRating" onChange={this.updateRating()} />8
              <input type="radio" value="9" name="tempermentRating" onChange={this.updateRating()} />9
              <input type="radio" value="10" name="tempermentRating" onChange={this.updateRating()} />10
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        <PostBox text={this.state.newPost} />
      </div>
    )
  }
}

export default PostCompose;

{/* <input type="radio" value="1" name="tempermentRating" onChange={this.update("tempermentRating")} />1
<input type="radio" value="2" name="tempermentRating" onChange={this.update("tempermentRating") } />2
<input type="radio" value="3" name="tempermentRating" onChange={this.update("tempermentRating") } />3
<input type="radio" value="4" name="tempermentRating" onChange={this.update("tempermentRating")} />4
<input type="radio" value="5" name="tempermentRating" onChange={this.update("tempermentRating") } />5
<input type="radio" value="6" name="tempermentRating" onChange={this.update("tempermentRating") } />6
<input type="radio" value="7" name="tempermentRating" onChange={this.update("tempermentRating")} />7
<input type="radio" value="8" name="tempermentRating" onChange={this.update("tempermentRating") } />8
<input type="radio" value="9" name="tempermentRating" onChange={this.update("tempermentRating") } />9
<input type="radio" value="10" name="tempermentRating" onChange={this.update("tempermentRating") } />10 */}