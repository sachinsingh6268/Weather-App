// Now we are calling the weather API and returning the information

const searchElement = document.querySelector('[data-city-search]'); // this is going to give us the search element 
const searchBox = new google.maps.places.SearchBox(searchElement); // this essentially says that at the "seachElement" that is written, we want to sep up a search box 

// Now let's set up a listener on our searchBox as given below
searchBox.addListener('places_changed',() => {
    const place = searchBox.getPlaces()[0] // it actually returns an array of places but we need the first one

    if(place == null) return // bcz if no such place we can't do anything
     
    // after checking that the place exits, we want to get the longitude and latitude of the place
    const longitude = place.geometry.location.lng();
    const latitude = place.geometry.location.lat();

    // this is going to post to our server
    fetch('/weather',{ 
        method:'POST',
        headers:{
            'Content-Type':'application/json', // this is saying that we are sending "json" to the server
            'Accept':'applicatin/json', // this just says that we are going to be getting JSON back from it 
        },
        body:JSON.stringify({ // body needs to be an json object but we want to stringify it
            latitude:latitude,
            longitude:longitude

        })
    }).then(res => res.json()).then(data => {
        setWeatherData(data,place.formatted_address) // this formatted_address will give the full address of the place so that we can show it in the web page in place of "To Find the Weather"

    }) // this will take the data that will be returned from the server as response, we need to convert that response to JSON. Then second "then" will give us the actual object format for us 

});  // this is not "addEventListener", this is "addListener" and it's specific to the Google API and the listener we want is "places-changed" this means anytime that the check or the box inside of our HTML has a place selected inside of it,The code inside this function is going to be called and this function actually doesn't pass the place that was changed