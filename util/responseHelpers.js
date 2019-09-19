const formatPosts = (postsArr) => {
  const posts = {};
  postsArr.forEach(post => {
    const postData = {
      id: post.id,
      user_id: post.user,
      temperamentRating: post.temperamentRating,
      // authorName: post.author_name,
      text: post.text,
      date: post.date
    };
    posts[post.id] = postData
  })

  return posts;
}

const formatPost = (post) => {
  // const formattedPost = {};
  const postData = {
    id: post.id,
    user_id: post.user,
    temperamentRating: post.temperamentRating,
    // authorName: post.author_name,
    text: post.text,
    date: post.date
  };
  // formattedPost[post.id] = postData

  return postData;
}


const formatDogs = (dogsArr) => {
  const dogs = {};
  dogsArr.forEach(dog => {
    const dogData = {
      id: dog._id,
      user: dog.user,
      name: dog.name,
      breed: dog.breed,
      dob: dog.dob,
      weight: dog.weight,
      energy: dog.energy,
      size: dog.size,
      vaccinations: dog.vaccinations,
      location: dog.location,
      date: dog.date
    };
    dogs[dog.id] = dogData
  })

  return dogs;
}



module.exports = { formatPosts, formatPost, formatDogs }