
export const selectPostsForDog = (props, dog) => {
    if (!dog) return [];

    let res = [];
    // props = this.entities.posts
    if ((Object.keys(props).length === 0)) {
        return res;
    }
    
    Object.values(props).forEach(post => {
        if (post.dog_id === dog.id) {
            res.push(post);
        }
    })
    return res;
}

