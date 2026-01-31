$(document).ready(function() {
    // Only run if we are on the XerahS pages
    if (window.location.pathname.includes("/xerahs")) {
        // Trigger immediately or on hover, similar to main site but we want it ready
        GetLatestXerahsReleaseInfo();
    }
});

function GetLatestXerahsReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/XerahS/releases/latest").done(function(release) {
        UpdateXerahsDownloadButton(release, asset => asset.name.toLowerCase().startsWith("xerahs") && asset.name.toLowerCase().includes("win-x64") && asset.name.endsWith(".exe"), $(".xerahs-download-win-x64"));
        UpdateXerahsDownloadButton(release, asset => asset.name.toLowerCase().startsWith("xerahs") && asset.name.toLowerCase().includes("win-arm64") && asset.name.endsWith(".exe"), $(".xerahs-download-win-arm64"));
        
        UpdateXerahsDownloadButton(release, asset => asset.name.toLowerCase().startsWith("xerahs") && asset.name.toLowerCase().includes("osx-x64"), $(".xerahs-download-mac-x64"));
        UpdateXerahsDownloadButton(release, asset => asset.name.toLowerCase().startsWith("xerahs") && asset.name.toLowerCase().includes("osx-arm64"), $(".xerahs-download-mac-arm64"));
        
        UpdateXerahsDownloadButton(release, asset => asset.name.toLowerCase().startsWith("xerahs") && asset.name.toLowerCase().includes("linux-x64"), $(".xerahs-download-linux-x64"));
    }).fail(function() {
        // Fallback is handled by the initial href in HTML
        console.log("Failed to fetch XerahS release info.");
    });
}

function UpdateXerahsDownloadButton(release, filterPredicate, element) {
    if (!element.length) return;

    let asset = release.assets.find(filterPredicate);
    if (asset) {
        let releaseInfo = "Version: " + release.tag_name +
            "\nFile size: " + (asset.size / 1024 / 1024).toFixed(2) + " MiB" +
            "\nRelease date: " + new Date(asset.updated_at).toLocaleDateString("en-CA") +
            "\nDownload count: " + asset.download_count.toLocaleString();

        element.attr("href", asset.browser_download_url);
        element.attr("title", releaseInfo);
        // Initialize tooltip if not already
        if (typeof element.tooltip === 'function') {
            element.tooltip({
                trigger: "hover"
            });
        }
    }
}
