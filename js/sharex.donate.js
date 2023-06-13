$(document).ready(function() {
    $(".btn-clipboard-copy").on("click", function() {
        let button = $(this);
        let text = button.prev("input[type='text']").val();
        navigator.clipboard.writeText(text).then(function() {
            button.text("Copied!");
            setTimeout(function() {
                button.text("Copy to clipboard");
            }, 2000);
        }, function() {
            button.text("Copy failed.");
            setTimeout(function() {
                button.text("Copy to clipboard");
            }, 2000);
        });
    });
});