$(function () {
    GetLatestReleaseInfo();
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/ShareX/releases/latest").done(function (release) {
        var asset = release.assets[0];
        var downloadCount = 0;
        for (var i = 0; i < release.assets.length; i++) {
            downloadCount += release.assets[i].download_count;
        }
        var oneHour = 60 * 60 * 1000;
        var oneDay = 24 * oneHour;
        var dateDiff = new Date() - new Date(asset.updated_at);
        var timeAgo;
        if (dateDiff < oneDay) {
            timeAgo = (dateDiff / oneHour).toFixed(1) + " hours ago";
        } else {
            timeAgo = (dateDiff / oneDay).toFixed(1) + " days ago";
        }

        var releaseInfo = "Version: " + release.tag_name.substring(1) +
            "\nFile size: " + (asset.size / 1024 / 1024).toFixed(2) + " MB" +
            "\nRelease date: " + moment(asset.updated_at).format("YYYY-MM-DD") +
            "\nReleased: " + timeAgo +
            "\nDownload count: " + downloadCount.toLocaleString();

        $(".sharex-download").attr("href", asset.browser_download_url);
        $(".sharex-download").attr("title", "<a href=\"downloads/\"><div>" + releaseInfo + "</div></a>");

        InitTooltip($(".sharex-download"), 300);
    });
}

function InitTooltip(obj, fadeDelay) {
    obj.tooltip({
        trigger: "manual",
        html: true,
        animation: false
    }).on("mouseenter", function () {
        obj.tooltip("show");
    }).on("mouseleave", function () {
        setTimeout(function () {
            if (!obj.is(":hover") && $(".tooltip").length && !$(".tooltip").is(":hover")) {
                obj.tooltip("hide");
            }
        }, fadeDelay);
    });

    $(document).on("mouseleave", ".tooltip", function () {
        setTimeout(function () {
            if (!obj.is(":hover") && $(".tooltip").length && !$(".tooltip").is(":hover")) {
                obj.tooltip("hide");
            }
        }, fadeDelay);
    });

    if (obj.is(":hover")) {
        obj.tooltip("show");
    }
}