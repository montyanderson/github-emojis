$.ajax({
    url: "https://api.github.com/emojis",
}).done(function(data) {
    for(var key in data) {
        $("body").append(
            $("<img />")
            .attr("src", data[key])
            .attr("data-text", key)
        );
    }

    $("img").mouseenter(function() {
        $("h2").text($(this).attr("data-text"));
    });
});
