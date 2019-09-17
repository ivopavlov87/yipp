const formatPosts = (postsArr) => {
  const posts = {};
  postsArr.forEach(post => {
    const postData = {
      id: post.id,
      user_id: post.user,
      text: post.text,
      date: post.date
    };
    posts[post.id] = postData
  })

  return posts;
}

module.exports = { formatPosts }