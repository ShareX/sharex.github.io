$(document).ready(function() {
    let code = GetParameterByName("code");

    if (!code) {
        code = GetParameterByName("oauth_verifier");
    }

    if (code) {
        $("#title").text("Please paste following code in ShareX");
        $("#code").val(code);

        $(".container-callback .btn").on("click", function() {
            let textToCopy = $("#code").val();
            navigator.clipboard.writeText(textToCopy).then(function() {
                $(".container-callback .btn").text("Copied!");
            }, function() {
                $(".container-callback .btn").text("Copy failed.");
            });
        });
    } else {
        let error = GetParameterByName("error");

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