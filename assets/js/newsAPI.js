  //Getting Data from Gnews API
//APi parameters
let newsContainer = document.getElementById("news__container");
let newsDropdown = document.getElementById("news__dropdown");

//API call

function newsfetch(q) {
  const url1 = `https://gnews.io/api/v4/search?q=${q}&max=6&country=us&lang=en&token=870061f7bf29680986c7953224cb9bd3`;
  console.log(url1);

  fetch(url1)
    .then((response) => response.json())
    .then(data => {
      data.articles.map(i => {
        
        let newsArticle = document.createElement("div");
        newsArticle.classList.add("news__article");

        newsArticle.innerHTML = `<h4 class="article__title">${i.title}</h4>
            <img class="article__img" 
             alt="Article Image"	src=${i.image}></img>
            <p class="article__body">${i.description}</p>
            <div class="article__btn"><a href=${i.url} target="blank">Read More</a></div>
            `;

        newsContainer.appendChild(newsArticle);
      });
    })

    .catch((error) => console.log("Error:", error));
}

//fetch onload
newsfetch("coronavirus savannah");
console.log(newsDropdown.value)
//Dropdown onchange
newsDropdown.addEventListener('change', (e) => {
  
  newsContainer.innerHTML = " ";
  var q1 = newsDropdown.value;
  console.log('q1')
  newsfetch(q1);
});
