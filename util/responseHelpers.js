const formatPosts = (postsArr) => {
  const posts = {};
  postsArr.forEach(post => {
    const postData = {
      id: post.id,
      user_id: post.user,
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
    // authorName: post.author_name,
    text: post.text,
    date: post.date
  };
  // formattedPost[post.id] = postData

  return postData;
}

module.exports = { formatPosts, formatPost }