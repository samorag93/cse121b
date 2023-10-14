/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}



/* async getTemples Function using fetch()*/
let templeList = [];
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok) {
        templeList = await response.json();
        // console.log(templeList)
        // displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => {
    const templesElement = document.getElementById("temples"); 

    if (templesElement) {
        
        const templeArticles = templesElement.getElementsByTagName("article");        
        while (templeArticles.length > 0) {
            templesElement.removeChild(templeArticles[0]);
        }
    }
};
reset();

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")))
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.templeName.includes("Utah")))
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)))
            break;
        case "all" :
            displayTemples(temples);
            break;
    }
}
getTemples();


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", ()=> {sortBy(templeList)});

