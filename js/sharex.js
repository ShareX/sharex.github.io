$(document).ready(function () {
    GetLatestReleaseInfo();
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/ShareX/releases").done(function (json) {
        var latestRelease = json[0];
        var name = latestRelease.name;
        var asset = latestRelease.assets[0];
        var timeago = $.timeago(asset.updated_at);
        var downloadCount = asset.download_count;
        var text = name + " was released " + timeago + " and downloaded " + downloadCount + " times.";
        $(".sharex-screenshot").animate({ "top": "+=15px" });
        $(".release-info").text(text);
        $(".release-info").fadeIn("slow");
    });
}