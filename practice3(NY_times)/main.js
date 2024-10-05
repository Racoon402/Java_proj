const key = "d9d579fd9dcc4a71b3d53cc4c5c6aadb";

let newsList = []
const getLatestNews = async () => {
    const url = new URL("https://newsapi.org/v2/top-headlines");
    url.search = new URLSearchParams({
        country:'us',
        apikey: key
    });
    const response = await fetch(url);
    const data = await response.json()
    newsList = data.articles
    // console.log(data.articles)
    render()
}

const render = () =>{
    const resultHTML = newsList.map(news => `
            <div class="row news" onclick ="openUrl('${news.url}')">
                <div class="col-md-4">
                    <img class="news-img"
                        src="${news.urlToImage?news.urlToImage:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'}">
                </div>
                <div class="col-md-8 news-info">
                    <h2>
                        ${news.title}
                    </h2>
                    <p>
                        ${news.description ? news.description : '정보가 없습니다'}
                    </p>
                    <div>
                        ${news.publishedAt}
                    </div>
                </div>
            </div>
        `
    ).join('');
    document.getElementById("newsMain").innerHTML = resultHTML;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openSearch(){
    const temp = document.getElementById("searchInput").style;
    temp.display === "block" ? temp.display = "none" : temp.display = "block" 
}

function openUrl(url){
    window.open(url, '_blank'); 
}

getLatestNews()
console.log('asd')