$(document).ready(function() {
    // Only run if we are on the XerahS pages
    if (window.location.pathname.includes("/xerahs")) {
        // Trigger immediately or on hover, similar to main site but we want it ready
        GetLatestXerahsReleaseInfo();
    }
});

function GetLatestXerahsReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/XerahS/releases/latest").done(function(release) {
        UpdateXerahsDownloadButton(release, ".exe", $(".xerahs-download"));
    }).fail(function() {
        // Fallback is handled by the initial href in HTML
        console.log("Failed to fetch XerahS release info.");
    });
}

function UpdateXerahsDownloadButton(release, assetExtension, element) {
    if (!element.length) return;

    let asset = release.assets.find(asset => asset.name.endsWith(assetExtension));
    if (asset) {
        let releaseInfo = "Version: " + release.tag_name +
            "\nFile size: " + (asset.size / 1024 / 1024).toFixed(2) + " MB" +
            "\nRelease date: " + new Date(asset.updated_at).toLocaleDateString("en-CA") +
            "\nDownload count: " + asset.download_count.toLocaleString();

        element.attr("href", asset.browser_download_url);
        element.attr("title", releaseInfo);
        // Initialize tooltip if not already
        element.tooltip({
            trigger: "hover"
        });
    }
}
