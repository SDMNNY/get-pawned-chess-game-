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











        
    }
});