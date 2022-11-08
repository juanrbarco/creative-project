document.getElementById("movieSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  
   const url1 = "https://ghibliapi.herokuapp.com/films";
  fetch(url1)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      
      let myNumber = Math.floor(Math.random() * 22);
      
      let results = "";
      
      results += '<h2 class="apiTitle">' + json[myNumber].title + '</h2>';
      results += '<h3 class="apiJapan">' + json[myNumber].original_title + '</h3>';
      results += '<img src="' + json[myNumber].image + '" class="apiImage"/>';
      results += '<div class="allText"><p class="apiDescription">' + json[myNumber].description + '</p>';
      results += '<p class="apiText">Released in ' + json[myNumber].release_date + '</p>';
      results += '<p class="apiText">Directed by ' + json[myNumber].director + '</p>';
      results += '<p class="apiText">Run time: ' + json[myNumber].running_time + ' minutes</p>';
      results += '<p class="apiText">Rotten Tomatoes score: ' + json[myNumber].rt_score + '%</p></div>';
      
      
       
      document.getElementById("movieResults").innerHTML = results;
    });
});