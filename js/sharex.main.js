$(function() {
    GetLatestReleaseInfo();
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/ShareX/releases/latest").done(function(release) {
        UpdateDownloadButton(release, $(".sharex-setup"), ".exe");
        UpdateDownloadButton(release, $(".sharex-portable"), ".zip");
    });
}

function UpdateDownloadButton(release, element, assetExtension) {
    var asset = release.assets.find(asset => asset.name.endsWith(assetExtension));
    var releaseInfo = "Version: " + release.tag_name.substring(1) +
        "\nFile size: " + (asset.size / 1024 / 1024).toFixed(2) + " MB" +
        "\nRelease date: " + new Date(asset.updated_at).toLocaleDateString("en-CA") +
        "\nDownload count: " + asset.download_count.toLocaleString();

    element.attr("href", asset.browser_download_url);
    element.attr("title", releaseInfo);
    element.tooltip({
        trigger: "hover"
    });
}