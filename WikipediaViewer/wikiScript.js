$(document).ready(function() {
    $("img").hover(function() {
      $(this).addClass("animated pulse")
      }, function() {
        $(this).removeClass()
    });    

    /*** Search button click function to search for a term ***/
    $("#search").click(function () {
        // clear results section
        $("#searchResults").html("");  
      
        // Get input from input field
        var searchTerm = $("#searchTerm").val();

        // URL for Wikipedia's web service API
        var wikiApiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        // Use AJAX to return search results
        $.ajax({
            type: "GET",
            dataType: "json",
            url: wikiApiUrl,
            async: false,
            success: function (data) { 
                // iterate through data array
                for (var i=0; i<data[1].length; i++) { 
                    // append each search result as a list item to the html ul
                    $("#searchResults").append("<li><em><a href=" + data[3][i] + ">" + data[1][i] + "</a></em></br>" + data[2][i] + "</li>");
                    $("a").attr("target", "_blank");  // open links in a new window   
                }            },
            error: function (err) {
                alert("error");
            }
        }); // end of ajax  

    }); // end of click function  

}); // end of document ready function