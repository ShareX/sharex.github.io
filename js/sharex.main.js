$(function() {
    GetLatestReleaseInfo();
    GetAppVeyorArtifact("ShareX", "sharex", "develop", "Setup", $(".sharex-dev-build"));
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/ShareX/ShareX/releases/latest").done(function(release) {
        UpdateDownloadButton(release, $(".sharex-setup"), ".exe");
        UpdateDownloadButton(release, $(".sharex-portable"), ".zip");
    });
}

function UpdateDownloadButton(release, element, assetExtension) {
    let asset = release.assets.find(asset => asset.name.endsWith(assetExtension));
    let releaseInfo = "Version: " + release.tag_name.substring(1) +
        "\nFile size: " + (asset.size / 1024 / 1024).toFixed(2) + " MB" +
        "\nRelease date: " + new Date(asset.updated_at).toLocaleDateString("en-CA") +
        "\nDownload count: " + asset.download_count.toLocaleString();

    element.attr("href", asset.browser_download_url);
    element.attr("title", releaseInfo);
    element.tooltip({
        trigger: "hover"
    });
}

function GetAppVeyorArtifact(accountName, projectSlug, branch, deploymentName, element) {
    let apiUrl = "https://ci.appveyor.com/api";
    $.getJSON(`${apiUrl}/projects/${accountName}/${projectSlug}/branch/${branch}`).done(function(project) {
        let jobId = project.build.jobs[0].jobId;
        $.getJSON(`${apiUrl}/buildjobs/${jobId}/artifacts`).done(function(artifacts) {
            let artifact = artifacts.find(artifact => artifact.name === deploymentName);
            let artifactFileName = artifact.fileName;
            let downloadURL = `${apiUrl}/buildjobs/${jobId}/artifacts/${artifactFileName}`;
            let artifactInfo = "File name: " + artifactFileName +
                "\nFile size: " + (artifact.size / 1024 / 1024).toFixed(2) + " MB";

            element.attr("href", downloadURL);
            element.attr("title", artifactInfo);
            element.tooltip({
                trigger: "hover"
            });
        });
    });
}