var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'anime.json', true);
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function createHTML(anime) {
    var rawTemplate = document.getElementById("animeTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(anime);
  
    var petsContainer = document.getElementById("anime-container");
    petsContainer.innerHTML = ourGeneratedHTML;
}