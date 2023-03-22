 // Define function to update user's last activity time
function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date().getTime();
        resolve();
      }, 1000);
    });
  }
  
  // Define function to create a post
  function createPost(post) {
    return new Promise((resolve, reject) => {
      // Code to create post here
      resolve(post);
    });
  }
  
  // Define function to delete a post
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      // Code to delete post here
      resolve();
    });
  }
  
  // Define user object with initial lastActivityTime value
  const user = { lastActivityTime: new Date().getTime() };
  
  // Create a post and update user's last activity time
  const post = { /* Post data here */ };
  const promises = [createPost(post), updateLastUserActivityTime(user)];
  
  Promise.all(promises)
    .then(([createdPost]) => {
      // Log all posts and user's last activity time
      console.log("All posts:", [createdPost]);
      console.log("Last activity time:", user.lastActivityTime);
  
      // Delete last post and log new set of posts
      return deletePost(createdPost.id);
    })
    .then(() => {
      // Code to fetch new set of posts and log them here
    })
    .catch((error) => {
      console.log(error)
    })
  