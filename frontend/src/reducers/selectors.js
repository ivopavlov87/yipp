
// export const selectPostsForDog = (props, dog) => {
//     if (!dog) return [];

//     let res = [];
//     // props = this.entities.posts
//     // if ((Object.keys(props).length === 0)) {
//     //     // debugger;
//     //     return res;
//     // }
    
//     props.forEach(post => {
//         // debugger;
//         if (post.dog === dog.id) {
//             res.push(post);
//         }
//     })
//     return res;
// }

export const selectPostsForDog = (posts, dogId) => {
    let res = [];
    if (!dogId) return res;
    Object.values(posts).forEach(post => {
        if (post.dog === dogId) {
            res.push(post)
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

export const selectOneImagesForDog = (props, dog) => {
    if (!dog) return [];

    let res = [];
    if ((Object.keys(props).length === 0)) {
        return res;
    }

    Object.values(props).forEach(image => {
        if (image.metadata.dogId === dog._id) {
            res.push(image);
        }
    })
    return res;
}