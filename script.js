var searchBtn = $("button");

var field1 = "lincoln";
var beginDate = "2000";
var endDate = "2019";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=nZxDzm1iq1RoTDQumxglBnkJh09PA3Tp";

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response){
    console.log(response);
    
})