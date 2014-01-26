$(document).ready(function () {
    GetLatestReleaseInfo();
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/ShareX/releases").done(function (json) {
        var release = json[0];
        var asset = release.assets[0];
        var downloadURL = "https://github.com/ShareX/ShareX/releases/download/" + release.tag_name + "/" + asset.name;
        var downloadCount = 0;
        for (var i = 0; i < release.assets.length; i++) {
            downloadCount += release.assets[i].download_count;
        }
        var releaseInfo = release.name + " was updated " + $.timeago(asset.updated_at) + " and downloaded " + downloadCount + " times.";
        $(".sharex-download").attr("href", downloadURL);
        $("#sharex-screenshot").animate({ "top": "+=20px" });
        $(".release-info").text(releaseInfo);
        $(".release-info").fadeIn("slow");
    });
}