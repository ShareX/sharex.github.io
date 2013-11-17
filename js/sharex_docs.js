$("#sidebar").affix({
    offset: {
        top: $('#top-navbar').height() + $('.jumbotron').height()
    }
});

$(document).ready(function () {
    var isLoading = false;
    var hash = window.location.hash.substr(1) + ".html";
    $("#sidebar a").each(function () {
        var href = $(this).attr("href");
        if (hash == href) {
            LoadContent(href);
            ToggleActive($(this));
            isLoading = true;
            return false;
        }
    });

    if (!isLoading) {
        var href = $("#sidebar a").first().attr("href");
        LoadContent(href);
    }

    $("#sidebar a").click(function () {
        window.scrollTo(0, 0);
        var href = $(this).attr("href");
        LoadContent(href);
        ToggleActive($(this));
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

function ToggleActive(a) {
    $("#sidebar a.active").removeClass("active");
    if (!a.hasClass('active')) {
        a.addClass('active');
    }
}