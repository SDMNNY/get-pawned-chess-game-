// fetch data from the API 
var requestOptions = { 
    method: "GET"
};

// parameters to target search topic and category of articles / including api key 

var params = { 
    api_token: "BAUV4sZ1juzHwHMoP0oEixmrImpP3BRbhT4WLffk",
    categories: [
        "general",
        "tech",
        "entertainment",
        "sports"
    ],
    search: "chess",
    limit: "100",
};

var esc = encodeURIComponent;
var query = Object.keys(params)
  .map(function (k) {
    return esc(k) + "=" + esc(params[k]);
  })
  .join("&");

// fetch data from api

fetch(`https://api.thenewsapi.com/v1/news/all?${query}${requestOptions}`)
  .then((response) => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    for (i = 0; i < 5; i++) {
        articleImg = data.data[i].image_url;
        articleTitle = data.data[i].title;
        articleSnippet = data.data[i].snippet;
        articleURL = data.data[i].url;
        var cardRow = $("<div>");
        cardRow.addClass("row");
        var cardCol = $("<div>");
        cardCol.addClass("col s12 m7");
        var card = $("<div>");
        card.addClass("card");
        // data aos is animate on scroll attribute. allows cards to flip up as user scrolls.
        card.attr("data-aos", "flip-up");
        var cardImgContainer = $("<div>");
        var cardImg = $("<img>").attr("src", `${articleImg}`);
        cardImg.attr("id", "card-img");
        var cardTitle = $("<span>").text(`${articleTitle}`);
        cardTitle.addClass("card-title");
        var cardContentContain = $("<div>");
        cardContentContain.addClass("card-content");
        var cardContent = $("<p>").text(`${articleSnippet}`);
        var cardActionContain = $("<div>");
        var cardAction = $("<a>")
          .attr("href", `${articleURL}`)
          .attr("target", "blank")
          .text(`Click here to read more!`);
  
        // append to element to parent elements
        cardImg.appendTo(cardImgContainer);
        cardTitle.appendTo(cardImgContainer);
        cardAction.appendTo(cardActionContain);
        cardContent.appendTo(cardContentContain);
        cardImgContainer.appendTo(card);
        cardContentContain.appendTo(card);
        cardActionContain.appendTo(card);
        card.appendTo(cardCol);
        card.appendTo(cardRow);
        cardRow.appendTo($("#card-container"));
      }



});
  
// initialize AOS 
AOS.init();