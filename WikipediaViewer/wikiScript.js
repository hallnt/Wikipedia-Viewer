$(document).ready(function () {
    // Submit button click function to search for a term 
    $("#search").click(function () {
        // Get input from input field
        var searchTerm = $("#searchTerm").val();
        //var url = "https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm";

        // URL for Wikipedia's web service API
        var wikiApiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        // AJAX JQuery to return search results
        $.ajax({
            type: "GET",
            dataType: "json",
            url: wikiApiUrl,
            async: false,
            success: function (data) {
                console.log(data[1][0]);
                console.log(data[2][0]);
                console.log(data[3][0]);
            },
            error: function (err) {
                alert("error");
            }
        }); // end of ajax function   

    }); // end of click function  

}); // end of document ready function