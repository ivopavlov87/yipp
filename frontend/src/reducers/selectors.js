
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


export const selectDogsForUser = (props, user) => {
    let res = [];
    if ((Object.keys(props).length === 0)) {
        return res;
    }
    Object.values(props).forEach(dog => {
        if (dog.user_id === user) {
            res.push(dog);
        }
    })
    return res;
}

export const selectImagesForDog = (props, dog) => {
    if (!dog) return [];

    let res = [];
    if ((Object.keys(props).length === 0)) {
        return res;
    }

    Object.values(props).forEach(image => {
        if (image.metadata.dogId === dog.id) {
            res.push(image);
        }
    })
    return res;
}