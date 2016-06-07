$(document).ready(function() {

    /*******************************************************
        Search button click function to search for a term
     *******************************************************/
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
                for (var i=0; i<data[1].length; i++) {
                    $("#searchResults").append("<li><strong><em>" + data[1][i] + "</em></strong></br>" + data[2][i] + "</br>" + data[3][i] + "</a></li>");
                }                
            },
            error: function (err) {
                alert("error");
            }
        }); // end of ajax  

    }); // end of click function  

}); // end of document ready function