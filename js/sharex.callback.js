$(document).ready(function() {
    var code = GetParameterByName("code");

    if (!code) {
        code = GetParameterByName("oauth_verifier");
    }

    if (code) {
        $("#title").text("Please paste following code in ShareX");
        $("#code").val(code);

        $(".container-callback .btn").on("click", function() {
            var textToCopy = $("#code").val();
            navigator.clipboard.writeText(textToCopy).then(function() {
                $(".container-callback .btn").text("Copied!");
            }, function() {
                $(".container-callback .btn").text("Copy failed.");
            });
        });
    } else {
        var error = GetParameterByName("error");

        if (error) {
            $("#title").text("ShareX is not properly authorized");
            $("#code").val("Error: " + error);
        } else {
            $("#title").text("Invalid access");
            $("#code").val("Unexpected error occured.");
        }

        $(".container-callback .btn").hide();
    }
});

function GetParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}