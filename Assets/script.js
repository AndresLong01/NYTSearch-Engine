var searchBtn = $("button");
var selector = $("#inputRecords");
var field1 = $("#input-box");
var beginDate = $("#input-begin");
var endDate = $("#input-end");
var resultTab = $("#results-section");
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
                var newCard = $("<div class='inside-form' id='results'>");
                var newArticle = $("<p id = 'articles'>");
                var searchImg = $("<img height='100px' width ='100px'>");
                searchImg.attr("src", "https://via.placeholder.com/100");
                

                var newTitle = $("<div id='title'>");
                newTitle.text(responses[i].headline.main);
                var newA = $("<a id='link'>");
                newA.attr("href", responses[i].web_url);
                newA.text(responses[i].web_url);
                var newAuthor = $("<div id='author'>")

                if (responses[i].byline.original === null){
                    newAuthor.text(responses[i].source);
                }
                else {
                    newAuthor.text(responses[i].byline.original);
                }

                newArticle.append(searchImg);
                newArticle.append(newTitle);
                newArticle.append(newA);
                newArticle.append(newAuthor);
                newCard.append(newArticle);
                resultTab.append(newCard);
            }
        }else {
            for(i=0; i<responses.length; i++){
                var newCard = $("<div class='inside-form' id='results'>");
                var newArticle = $("<p id = 'articles'>");
                var searchImg = $("<img height='100px' width ='100px'>");
                searchImg.attr("src", "https://via.placeholder.com/100");
                

                var newTitle = $("<div id='title'>");
                newTitle.text(responses[i].headline.main);
                var newA = $("<a id='link'>");
                newA.attr("href", responses[i].web_url);
                newA.text(responses[i].web_url);
                var newAuthor = $("<div id='author'>")

                if (responses[i].byline.original === null){
                    newAuthor.text(responses[i].source);
                }
                else {
                    newAuthor.text(responses[i].byline.original);
                }

                newArticle.append(searchImg);
                newArticle.append(newTitle);
                newArticle.append(newA);
                newArticle.append(newAuthor);
                newCard.append(newArticle);
                resultTab.append(newCard);
            }
        }

    });
})