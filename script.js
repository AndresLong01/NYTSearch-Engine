var searchBtn = $("button");
var selector = $("selectoring");
var field1 = "coronavirus";
var beginDate = "20000101";
var endDate = "20191231";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+field1+"&begin_date="+ beginDate + "&end_date"+ endDate +"&api-key=nZxDzm1iq1RoTDQumxglBnkJh09PA3Tp";

var selection;

selector.on("change", function(e){
    e.preventDefault();
    selection = parseInt(selector.val());
})

searchBtn.on("click", function(){
    //Where is the sibling element that corresponds to the value of how many pages you want to see
    //when that is selected, console log val();
    //selection
    //date
    // hello
    //button $(this).prev().prev().prev().val();
    //use that value to change the loop for the result
})
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var responses = response.response.docs;
        
        for(i=0; i<responses.length; i++){
            var newDiv = $("<div>");
            newDiv.text(responses[i].abstract);
            var newA = $("<a>");
            newA.attr("href", responses[i].web_url);
            newA.text("Link");
            newDiv.append(newA);
            $("body").append(newDiv);
        }
    });