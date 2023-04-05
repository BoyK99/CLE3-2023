window.addEventListener('load', init);

//Globals
let apiUrl = 'http://localhost/PRG03-2021-2022/week1/assignment-start/webservice/';
let coffeeData = [];
let favorites = [];
let gallery;
let favoriteGallery = [];
let detailModalContent;
let detailModal;
let detailModalClose;



/**
 * Initialize after the DOM is ready
 */
function init()
{
    //Retrieve gallery
    gallery = document.getElementById('coffee-gallery');

    //Start the application with loading the API data
    getCoffeeData(apiUrl, createCoffeeCards);

    //retrieve gallery
    gallery = document.getElementById('coffee-gallery')
    gallery.addEventListener('click', coffeeClickHandler)

    detailModal = document.getElementById('coffee-detail')
    detailModalContent = detailModal.querySelector('.modal-content');
    detailModalClose = document.getElementById('modal-close');
    detailModalClose.addEventListener('click', detailModalCloseClickHandler);

    favoriteGallery = document.getElementById('coffee-gallery');
    favoriteGallery.addEventListener('click', favoriteClickHandler);
}

/**
 * AJAX-call to retrieve coffee from the API
 */
function getCoffeeData(url, succesHandler){
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(succesHandler)
        .catch(ajaxErrorHandler);
}




function createCoffeeCards(data)
{

    //Loop through the list of coffee
    for (let coffee of data) {
        console.log(data);
        //Wrapper element for every coffee card. We need the wrapper now, because adding it later
        //will result in coffee being ordered based on the load times of the API instead of chronically
        let coffeeCard = document.createElement('div');
        coffeeCard.classList.add('coffee-card');
        coffeeCard.dataset.name = coffee.name;

        //Append coffee card to the actual HTML
        gallery.appendChild(coffeeCard);

        //Element for the name of the coffee
        let title = document.createElement('h2');
        title.innerHTML = `${coffee.name}`;
        coffeeCard.appendChild(title);

        //Element for the image of the coffee
        let image = document.createElement('img');
        image.src = coffee.img;
            coffeeCard.appendChild(image);

        let recipe = document.createElement('button');
        recipe.innerHTML = "Show recipe";
        recipe.dataset.name = coffee.name;
        recipe.dataset.id = coffee.id;
        recipe.classList.add('recipe');
        coffeeCard.appendChild(recipe);

        let fav = document.createElement('button');
        fav.classList.add('favorite');
        fav.innerHTML = '<i class="fa-regular fa-heart fa-xl" id="favoriteIcon" data-fav-id="'+coffee.id+'"></i>';
        fav.dataset.name = coffee.name;
        fav.dataset.id = coffee.id;
        coffeeCard.appendChild(fav);


        coffeeData[coffee.id] = coffee;


    }
    favoritesLoading();
}

function favoritesLoading() {
    let storedFavorites = JSON.parse(localStorage.getItem(`favoriteItems`))

    if (storedFavorites !== null){
        for (let storedFavorite of storedFavorites) {
            favorites.push(storedFavorite);
            let favorited = document.querySelector('[data-fav-id~="'+storedFavorite+'"]');
            favorited.classList.replace('fa-regular', 'fa-solid');
            console.log(favorited);
        }
    }
}

function favoriteClickHandler(e) {
    // console.log(e);
    let favorite = e.target;
    // console.log(favorite);

    let target = e.target.dataset.favId;
    // console.log(target);

    let icon = document.querySelector('[data-fav-id~="'+target+'"]');
    // console.log(icon);

    if (favorite.nodeName !== 'I') {
        return;
    }

    let favoriteId = favorite.dataset.favId;
    console.log(favoriteId);

    if(favorites.includes(favoriteId)){
        removeFavorite(favoriteId)
        // console.log("remove");
        icon.classList.replace('fa-solid', 'fa-regular');
    } else{
        // let favoritePosition = favorites.indexOf(favorite);
        addFavorite(favoriteId)
        // console.log("add");
        icon.classList.replace('fa-regular', 'fa-solid');
    }

}

function addFavorite(value){
    favorites.push(value);
    console.log(favorites);
    localStorage.setItem('favoriteItems', JSON.stringify(favorites));

}


function removeFavorite(value){
    let favoritePosition = favorites.indexOf(value);
    favorites.splice(favoritePosition, 1);
    localStorage.setItem('favoriteItems', JSON.stringify(favorites));
}



/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
    console.log(data);
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
    gallery.before(error);
}

function coffeeClickHandler(e)
{
    let clicked = e.target;
    if (clicked.nodeName !== 'BUTTON'){
        return;
    }
    if (!clicked.classList.contains('recipe')){
        return;
    }

    let coffee = coffeeData[e.target.dataset.id];
    // console.log(coffee);

    detailModalContent.innerHTML = "";

    let title = document.createElement('h1');
    title.innerHTML = `${coffee.name}`;
    detailModalContent.appendChild(title);

    let text = document.createElement('recipe');
    text.innerHTML = coffee.recipe;
    detailModalContent.appendChild(text);

    detailModal.classList.add('open');

}

function detailModalCloseClickHandler() {
    detailModal.classList.remove('open');
}
