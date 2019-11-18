# Yipp

 [Yipp live](https://yipp.herokuapp.com/)

A Yelp-inspired app for dog-owners to leave reviews and ratings on user’s dogs based on social interactions.

## Architecture and Technology

<div><img src="https://github.com/ivopavlov87/yipp/blob/master/yipp-login.gif" alt="Demo login" /></div>

### Technologies used: 
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Node.js](https://nodejs.org/)

The backend is a Node.js runtime and Express framework used for processing requests and querying the application database. Using the Express framework allowed for quick setup with well tested and established design patterns along with well documented troubleshooting whenever any bugs happened to appear. The database was setup on MongoDB for user, and review data, as well as image hosting. The frontend is tied together using React and Redux to allow for specific component re-rendering utilising the VirtualDOM and reusable React components kept the look and feel of the site to remain universal. Redux development tools were used extensively during development as a convenient way to look at the current state. 

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  favoriteDogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'dog' }]
});
```

## Feature Details

### Authentication

User authentication was handled using Passport.js for it's unobtrustive integration into any Express-based web application and ease of returning the user to the frontend and allowing access to site features.

```javascript
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          // return the user to the frontend
          return done(null, user);
        }
        // return false since there is no user
        return done(null, false);
      })
      .catch(err => console.log(err));
  }));
};
```

### Dog Creation

<div><img src="https://github.com/ivopavlov87/yipp/blob/master/yipp-dogcreate.gif" alt="dog show page" /></div>
<div><img src="https://github.com/ivopavlov87/yipp/blob/master/yipp-dogshow.gif" alt="dog show page" /></div>

Each user is able to create a page for each dog they have, along with a description and a carousel to display images of their dog.

```javascript
class DogSlider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        const photos = this.props.imgUrls.map(url =>
            <div className='image-slide'>
                <img src={url} alt="" />
            </div>)
        return (
            <Slider {...settings}>
                {photos}
            </Slider>
        )
    }
}

export default DogSlider;
```

### Reviews

Each dog's page shows all comments left with each review along with an aggregated average of each rating to detail how well the dog behaves.

```javascript
let dogRatingTotal = 0
this.props.posts.map(post => {
		return dogRatingTotal += post.temperamentRating
})

let dogRatingAvg = 
	(dogRatingTotal / (this.props.posts).length) ? 
		`${(dogRatingTotal / (this.props.posts).length).toPrecision(2)} yipps`
		: "This dog has no reviews"
```

### User Profile

<div><img src="https://github.com/ivopavlov87/yipp/blob/master/dynamic-profile.gif" alt="dynamic profile" /></div>

* Through the use of a toggle, users are able to dynamically view their dogs, their favorite dogs, and all ratings they have left.

```javascript
	let myDog = ["profile-my-dogs"];
	let dogbtn = ["my-dogs"];
	if (this.state.addDog) {
		myDog.push("active");
		dogbtn.push("active");
	}

	let myFavorite = ["profile-favorite-dogs"];
	let favbtn = ["my-favorite"];
	if (this.state.addFavorite) {
		myFavorite.push("active");
		favbtn.push("active");
	}

	let myPosts = ["profile-posts"];
	let postbtn = ["my-reviews"];
	if (this.state.addPost) {
		myPosts.push("active");
		postbtn.push("active");
	}
```

```javascript
	<div className={myDog.join(" ")}>
		<div className="profile-right-header">
			<h2>Your Dogs:</h2>
		</div>
		<ul>{userDogsDisplay}</ul>
	</div>
	<div className={myFavorite.join(" ")}>
		<div className="profile-right-header">
			<h2>Your Favorites:</h2>
		</div>
		<ul>{favoriteDogs}</ul>
	</div>
	<div className={myPosts.join(" ")}>
		<div className="profile-right-header">
			<h2>All of your reviews:</h2>
		</div>
		<div className="profile-post-body">
			{this.props.posts.map(post => (
				<ProfilePostBox
					key={post.id}
					post={post}
					currentUser={this.props.currentUser}
					destroyPost={this.props.destroyPost}
				/>
			))}
		</div>
	</div>
```

## Future Releases

* Map integration and expansion to other cities
* Inclusion of videos for dog show page
* Owner information on user account profile