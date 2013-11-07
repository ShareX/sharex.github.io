$(document).ready(function () {
    var isLoading = false;
    var hash = window.location.hash.substr(1) + ".html";
    $("#mynav li a").each(function () {
        var href = $(this).attr("href");
        if (hash == href) {
            LoadContent(href);
            isLoading = true;
            return false;
        }
    });

    if (!isLoading) {
        var href = $("#mynav li a").first().attr("href");
        LoadContent(href);
    }

    $("#mynav li a").click(function () {
        var href = $(this).attr("href");
        LoadContent(href);
        return false;
    });
});

function LoadContent(href) {
    $("#content").fadeOut("fast", loadContent);
    $("#loading").fadeIn("fast");

    window.location.hash = href.substr(0, href.length - 5);

    function loadContent() {
        $("#content").load(href, "", showNewContent())
    }

    function showNewContent() {
        $("#loading").hide();
        $("#content").fadeIn("normal");
    }
}