YIPP
FB / Yelp clone


• Background and Overview
• Functionality and MVP
• Technologies and Technical Challenges
• Group Members and Work Breakdown
	○ Proposal must have a day-by-day breakdown for each individual. See sample proposal for clarification.
• Plan for getting users and reviews (if your app is a downloadable app)


MVPs
USER AUTH
	Profiles
		User Params
		location, owner, dog info.
		Dog Params
		breed, size, weight, temperament, motivation, alteredStatus (snipped), age, energy, location
OTHER MVPs
	Friending: Friends List, Friends Show (Profile)
	Posts (Review) CRUD, Rating Feature attached to Dogs
	Comments
	Searching

Bonus
	News Feed
	Rating Feature on dogs
	Comment CRUD (with a 1-5 star rating?)
	Favorites
	Renting a dog
	Book a puppy playdate


STRUCTURE
 Splash
	login, signup
 DogIndex
	dog show pages
		dog info., posts, 
 UserIndex
	user profile info.


SCHEMA
users
	username, password_digest, session_token, timestamps
dogs (rating)
	name, breed, dob, weight, energy level, temperament, vaccinations, color, timestamps
posts (reviews)
	title, body, timestamps
ratings
	score, timestamps
	
BONUS
comments
	body, timestamps
	foreign key: post_comments
event
	title, location, start_time, length, activity, # of participants
	
	
GROUP BREAKDOWN
Frontend: Anis, Ivo
Backend: Long, Kyle
NOT ABSOLUTE
	
	
ANDY/TREVOR NOTES
Pattern for FSP
	build MVPs in slices, one MVP in progress at every point in process
Delegate people to front or back, pair up on features
	start testing integrating slowly
Communication is key
	keep the group together
	pairs can keep people on the same page, by feature or section
	don't want people doing the same work
	integrate frequently
	delegate tasks to ensure no pieces are missing, and to ensure responsibility
Work together through User Auth
	once on the same page, we can move to different places
	

WORKFLOW DEMO
	Protect master branch in github settings (disable push to master branch)
	Check out to the staging area, not to the master branch
	merge into master branch from staging via pull request
	FOR TODAY, just work from staging
	PULL BEFORE YOU PUSH, RESOLVE GIT CONFLICTS LOCALLY BEFORE YOU PUSH

