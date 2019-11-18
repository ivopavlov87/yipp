import React from 'react';
// import PostBox from './post_box';
// import { withRouter } from 'react-router-dom';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.post.id,
      text: this.props.post.text,
      temperamentRating: 0,
      authorName: this.props.currentUser.username
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postId = this.props.match.params.id;
  }

  // componentDidUpdate(){
  //   this.props.fetchDogPosts(this.props.dogId)
  // }

  handleSubmit(e) {
    e.preventDefault();
    let post = {
      id: this.props.post.id,
      text: this.state.text,
      temperamentRating: this.state.temperamentRating,
      authorName: this.props.currentUser.username
    };
    // debugger;
    this.props.updatePost(post); // .then(this.props.history.goBack());
    this.setState({ text: '', temperamentRating: 0 });
    this.props.history.push(`/posts`);
  }
// `/dogs/${this.props.dogId}`
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
    // console.log("the props")
    // console.log(this.props)
    return (
      <div className="dog-show-post-container">
        <form onSubmit={this.handleSubmit} className="dog-show-post-form">
          <div>
            <br/>
            Edit this Review:
            <br/>
            <textarea rows="6" cols="60"
              value={this.state.text}
              onChange={this.updateText()}
              placeholder="Write your post..."
            />
            <br/>
            Temperament Rating:
            <br/>
            <div className="temperament-rating-radio">
              <input type="radio" value="1" name="temperamentRating" onChange={this.updateRating()} />1&nbsp;&nbsp;
              <input type="radio" value="2" name="temperamentRating" onChange={this.updateRating()} />2&nbsp;&nbsp;
              <input type="radio" value="3" name="temperamentRating" onChange={this.updateRating()} />3&nbsp;&nbsp;
              <input type="radio" value="4" name="temperamentRating" onChange={this.updateRating()} />4&nbsp;&nbsp;
              <input type="radio" value="5" name="temperamentRating" onChange={this.updateRating()} />5&nbsp;&nbsp;
              <input type="radio" value="6" name="temperamentRating" onChange={this.updateRating()} />6&nbsp;&nbsp;
              <input type="radio" value="7" name="temperamentRating" onChange={this.updateRating()} />7&nbsp;&nbsp;
              <input type="radio" value="8" name="temperamentRating" onChange={this.updateRating()} />8&nbsp;&nbsp;
              <input type="radio" value="9" name="temperamentRating" onChange={this.updateRating()} />9&nbsp;&nbsp;
              <input type="radio" value="10" name="temperamentRating" onChange={this.updateRating()} />10
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
      </div>
    )
  }
}

class PostEditWrapper extends React.Component {


    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    render() {
      if (this.props.post) {
          return <PostEdit {...this.props}/>
      } else { return null }
    }
}



export default PostEditWrapper;


