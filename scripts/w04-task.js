/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Samuel Moroni Aguilar Cordova" ,
    image: 'images/myImage.jpg',
    favoriteFoods: [
        "Pizza", 
        "Sushi", 
        "Burgers", 
        "Ice Cream", 
        "Chinese Food", 
        "Salad"
    ],
    hobbies: [
        "Gym",
        "Videogames",
        "Soccer",
        "Read books"
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Otavalo, Ecuador",
        length: "17 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Bogota, Colombia",
        length: "1 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Paris, France",
        length: "2 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Madrid, Spain",
        length: "9 years"
    }
);


/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#name').alt = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.image;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(places => {
    let dt = document.createElement('dt')
    dt.textContent = places.place;
    let dd = document.createElement('dd')
    dd.textContent = places.length;
    document.querySelector('#places-lived').appendChild(dt)
    document.querySelector('#places-lived').appendChild(dd)
})