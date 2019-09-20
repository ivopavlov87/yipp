const formatPosts = (postsArr) => {
  const posts = {};
  postsArr.forEach(post => {
    const postData = {
      id: post.id,
      user: post.user,
      temperamentRating: post.temperamentRating,
      text: post.text,
      date: post.date,
      authorName: post.authorName,
      // dog: post.dog.id
    };
    posts[post.id] = postData
  })

  return posts;
}

const formatPost = (post) => {
  // const formattedPost = {};
  const postData = {
    id: post.id,
    user: post.user,
    temperamentRating: post.temperamentRating,
    text: post.text,
    date: post.date,
    authorName: post.authorName,
    // dog: post.dog.id
  };
  // formattedPost[post.id] = postData

  return postData;
}


const formatDogs = (dogsArr) => {
  const dogs = {};
  dogsArr.forEach(dog => {
    const dogData = {
      id: dog._id,
      user_id: dog.user,
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

const formatDog = (dog) => {
  const dogData = {
    id: dog._id,
    user_id: dog.user,
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
  return dogData;
}





module.exports = { formatPosts, formatPost, formatDogs, formatDog }