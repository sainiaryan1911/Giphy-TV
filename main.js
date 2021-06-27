// Fetching the JSON

let url="https://api.giphy.com/v1/gifs/trending?api_key=u2XZJeJvhq2uPkuIHOOV24YbRBcKSPm3";

// AJAX request
let giphyAJAXCall = new XMLHttpRequest();
giphyAJAXCall.open('GET',url);
giphyAJAXCall.send();

giphyAJAXCall.addEventListener('load',function(e){

    let data=e.target.response;
    pushToDOM(data);

});

// Displaying on DOM

function pushToDOM(input){

    // parse JSON
    let response=JSON.parse(input);

    // selecting all the gifs and their associated data
    let imageURLs = response.data;

    // Declaring gif container
    let container=document.querySelector("#gif-container");

    imageURLs.forEach(image => {

        setTimeout(function(){

            // selecting the url for the current gif
            let src= image.images.original.url;

            // output
            container.innerHTML="<img src=\""+src+"\" id=\"gif\">";

        },10000*imageURLs.indexOf(image));
        
    });


};