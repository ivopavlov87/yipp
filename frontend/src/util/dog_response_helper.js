const formatDogs = (DogsArr) => {
    const dogs = {};
    DogsArr.forEach(dog => {
        const dogData = {
            id: dog._id,
            user_id: dog.user,
            name: dog.name,
            breed: dog.breed,
            dob: dog.dob,
            size: dog.size,
            weight: dog.weight,
            energy: dog.energy,
            vaccinations: dog.vaccinations,
            location: dog.location,
            date: dog.date
        };
        dogs[dog._id] = dogData
    })

    return dogs;
}