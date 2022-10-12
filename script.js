const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const healthBtn = document.getElementById("health");
const scienceBtn = document.getElementById("science");
const searchBtn = document.getElementById("searchBtn");
const newsRoomBtn=document.getElementById("newsRoomBtn")

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

// Array
let newsDataArr = [];

// api's 

const headlines_news = "https://saurav.tech/NewsAPI/everything/cnn.json";
const general_news = "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json";
const business_news = "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json";
const sports_news = "https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json";
const entertainment_news = "https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json";
const technology_news = "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
const health_news="https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
const science_news="https://saurav.tech/NewsAPI/top-headlines/category/science/in.json";
const search_news = "https://saurav.tech/NewsAPI/everything/cnn.json";
const news_room= "https://saurav.tech/NewsAPI/everything/cnn.json";

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};

// adding event listeners

newsRoomBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchNewsRoom();
});

generalBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>General news</h4>";

    // below is another function that is getting called.
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Business news</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports news</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Entertainment news</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Technology news</h4>";
    fetchTechnologyNews();
});

healthBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Health news</h4>";
    fetchHealthNews();
});

scienceBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Science news</h4>";
    fetchScienceNews();
});

// searchBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>Search : " +newsQuery.value+ "</h4>";
//     fetchQueryNews();
// });

// var myJson;
// myJson.articles.slice(0,12);


const fetchHeadlines = async () => {
    const response = await fetch(headlines_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

// fetching the API's.

const fetchGeneralNews = async () => {
    const response = await fetch(general_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(business_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchNewsRoom = async () => {
    const response = await fetch(news_room);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(entertainment_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(sports_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(technology_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchHealthNews = async () => {
    const response = await fetch(health_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchScienceNews = async () => {
    const response = await fetch(science_news);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(search_news+encodeURIComponent(newsQuery.value));
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles.slice(0,12);
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsDetails.innerHTML = "";

    if(newsDataArr.length == 0) {
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsDataArr.forEach(news => {
        
        // dynamic html.

        let date = news.publishedAt.split("T");

        let col = document.createElement('div');
        col.className="col-sm-12 col-md-6 col-lg-4 p-3 mt-4 m-0 card";
        

        let card = document.createElement('div');
        card.className = "p-2";

        let image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        let cardBody = document.createElement('div');

        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title mt-4";
        newsHeading.innerHTML = news.title;

        let dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        let description = document.createElement('p');
        description.className="text-muted";
        description.innerHTML = news.description;

        let link = document.createElement('a');
        link.className="btn btn-dark btn-sm";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more...";

        let pagin=document.createElement('div');



        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetails.appendChild(col);
    });

}
