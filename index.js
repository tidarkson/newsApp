const generalBtn = document.getElementById("General")
const entertainmentBtn  = document.getElementById("Entertainment")
const sportsBtn  = document.getElementById("Sports")
const technologyBtn  = document.getElementById("Technology")
const politicsBtn  = document.getElementById("Politics")
const businessBtn  = document.getElementById("Business")
const searchBtn  = document.getElementById("Search")
const inputBtn = document.getElementById("newsQuery")
const newsType  = document.getElementById("newsType")
const newsDetails  = document.getElementById("newsDetails")

// Array
var newsDataArray = [];

// APIs 
const API_KEY = "0aa6740fc8a74cac827f52ee4e143063";
const HEADLINE_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const POLITICS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="



const fetchHeadlines = async () => {
    const res = await fetch(HEADLINE_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        console.log(myJson)
        newsDataArray = myJson.articles
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}


window.onload = function(){
    newsType.innerHTML = "<h4>Headlines</h4>"
    fetchHeadlines()
}

const fetchGeneralNews = async () => {
    const res = await fetch(GENERAL_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        console.log(myJson)
        newsDataArray = myJson.articles
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchEntertainmentNews = async () => {
    const res = await fetch(ENTERTAINMENT_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        console.log(myJson)
        newsDataArray = myJson.articles
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchSportsNews = async () => {
    const res = await fetch(SPORTS_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.articles
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchTechnonolyNews = async () => {
    const res = await fetch(TECHNOLOGY_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.articles
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchPoliticsNews = async () => {
    const res = await fetch(POLITICS_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.articles
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchBusinessNews = async () => {
    const res = await fetch(BUSINESS_NEWS+API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.articles
    } else {
        console.log(res.status, res.statusText)

    }

    displayNews()
}

const fetchQueryNews = async () => {
    if (newsQuery.value === null) {
        return
    }

    const res = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+ "&apiKey=" + API_KEY);
        newsDataArray = []
    if (res.status >= 200 && res.status < 300) {
        const myJson = await res.json();
        newsDataArray = myJson.articles
    } else {
        console.log(res.status, res.statusText)
    }

    displayNews()
}


generalBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>General News</h4>"
    fetchGeneralNews()
});

entertainmentBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Entertainment News</h4>"
    fetchEntertainmentNews()

});

sportsBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Sports News</h4>"
    fetchSportsNews()

});

technologyBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Technology</h4>"
    fetchTechnonolyNews()

});

politicsBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Politics</h4>"
    fetchPoliticsNews()

});

businessBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Business News</h4>"
    fetchBusinessNews()

});

searchBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Search : " + newsQuery.value + " </h4>"
    fetchQueryNews()

})

function displayNews() {
    newsDetails.innerHTML = ""


    if (newsDataArray.length === 0) {
        newsDetails.innerHTML = "<h5> No data was found </h5>"
        return;
    }

    newsDataArray.forEach (news => {

        var date = news.publishedAt.split('T')

        var col = document.createElement("div")
        col.className = "col-sm-12 col-md-4 col-lg-3 pg-2 card";

        var card = document.createElement("div");
        card.className = "p-2"

        var image = document.createElement("img");
        image.setAttribute("height", "160px");
        image.setAttribute("width", "100%");
        image.src = news.urlToImage

        var cardBody = document.createElement("div");

        var newsHeading = document.createElement("h4");
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement("h6");
        dateHeading.className = "text-primary"
        dateHeading.innerHTML = date[0];

        var description = document.createElement("p");
        description.className = "text-muted";
        description.innerHTML = news.description

        var link = document.createElement("a");
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.innerHTML = "Read More";
        link.href = news.url;

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link)

        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card)

        newsDetails.appendChild(col)



    })
}