var searchBtn = $("button");
var selector = $("#inputRecords");
var field1 = $("#input-box");
var beginDate = $("#input-begin");
var endDate = $("#input-end");
var resulting = $("#results");

var selection;

// Assigns a value to currently selected element in the dropdown menu
selector.on("change", function(e){
    e.preventDefault();
    selection = parseInt(selector.val());
})

searchBtn.on("click", function(e){
    e.preventDefault();

    var fieldVal = field1.val();
    var fieldBegin = "&begin_date" + beginDate.val() + "0101";
    var fieldEnd = "&end_date" + endDate.val() + "1231";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+fieldVal + fieldBegin + fieldEnd +"&api-key=nZxDzm1iq1RoTDQumxglBnkJh09PA3Tp";

    console.log(selection);
    console.log(fieldVal);
    console.log(fieldBegin);
    console.log(fieldEnd);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var responses = response.response.docs;
        
        if (selection !== undefined){
            for(i=0; i<selection; i++){
                var newDiv = $("<div>");
                newDiv.text(responses[i].abstract);
                var newA = $("<a>");
                newA.attr("href", responses[i].web_url);
                newA.text("Link");
                newDiv.append(newA);
                resulting.append(newDiv);
            }
        }else {
            for(i=0; i<responses.length; i++){
                var newDiv = $("<div>");
                newDiv.text(responses[i].abstract);
                var newA = $("<a>");
                newA.attr("href", responses[i].web_url);
                newA.text("Link");
                newDiv.append(newA);
                resulting.append(newDiv);
            }
        }

    });
})