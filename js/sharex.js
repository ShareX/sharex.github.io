$(document).ready(function () {
    GetLatestReleaseInfo();
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/ShareX/releases").done(function (json) {
        var release = json[0];
        var asset = release.assets[0];

        var downloadURL = "https://github.com/ShareX/ShareX/releases/download/" + release.tag_name + "/" + asset.name;
        $(".sharex-download").attr("href", downloadURL);

        var releaseInfo = release.name + " was released " + $.timeago(asset.updated_at) + " and downloaded " + asset.download_count + " times.";
        $("#sharex-screenshot").animate({ "top": "+=20px" });
        $(".release-info").text(releaseInfo);
        $(".release-info").fadeIn("slow");
    });
}