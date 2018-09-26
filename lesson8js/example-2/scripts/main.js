// Loop through the contents of data

render = function(){
    div = document.getElementById("content");
    str = ``
    let highest_score = 0;
    var highest_rating = 0;
    for(let i = 0;i < data.length; i += 1) {
        // console.log(data[i].rating)
        if(data[i].rating>highest_rating){
            // console.log("hi");
            highest_rating = data[i].rating;
        }
    }

    for (let i = 0; i < data.length; i += 1) {
      const alien = data[i];
      const {id, prefix, first_name, last_name, rating, date, image, high_score} = alien;
      const DATE = new Date(date).toDateString();
      let rating_per = (100*rating/highest_rating).toFixed(0) + "%";
      str+=`<div class='alien'>
      <h2>${prefix} ${first_name} ${last_name}</h2>
      <p><label>Rating: </label><span>${rating_per}</span></p>
      <p><label>High Score: </label><span>${high_score}</span></p>
      <p>${DATE}
      <img src='${image}' alt='alien'></img></p>
      </div>`
    }
    div.innerHTML = str;
}


render();
