$(document).ready(function() {
    let repo = GetParameterByName("repo");

    if (!repo) {
        repo = "ShareX/ShareX";
    }

    GetReleases(repo);
});

async function GetReleases(repo) {
    let perPage = 100;
    let page = 1;
    let totalDownloadCount = 0;
    let previousPublishedAt = new Date();

    while (true) {
        let response = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=${perPage}&page=${page}`);
        if (!response.ok) return;

        let json = await response.json();

        for (let i = 0; i < json.length; i++) {
            let release = json[i];
            if (release.assets.length === 0) {
                continue;
            }
            let assets = release.assets.sort((a, b) => b.name.endsWith(".exe") - a.name.endsWith(".exe"));
            let downloadCount = 0;
            let releaseInfo = "";
            for (let i2 = 0; i2 < assets.length; i2++) {
                let asset = assets[i2];
                if (asset.name.endsWith(".sha256")) {
                    continue;
                }
                let fileSize = asset.size / 1024 / 1024;
                downloadCount += asset.download_count;
                releaseInfo += `
                    <div class="downloads-asset-info">
                        <a href="${asset.browser_download_url}">${asset.name}<span>${fileSize.toFixed(2)} MB</span></a>
                    </div>
                `;
            }
            totalDownloadCount += downloadCount;
            let publishedAt = new Date(release.published_at);
            let activeDays = (previousPublishedAt - publishedAt) / (1000 * 60 * 60 * 24);
            previousPublishedAt = publishedAt;

            $(".table-downloads tbody").append(`
                <tr class="downloads-release-info collapsed" data-toggle="collapse" data-target="#collapse${release.id}">
                    <td>
                        <i class="fa"></i>
                        <a href="${release.html_url}">${release.name}</a>
                        ${release.prerelease ? '<div class="float-right"><span class="badge badge-danger">Pre-release</span></div>' : ""}
                    </td>
                    <td>${publishedAt.toLocaleDateString("en-CA")}</td>
                    <td>${activeDays.toFixed(1)}</td>
                    <td>${downloadCount.toLocaleString()}</td>
                </tr>
                <tr class="downloads-assets" colspan="100%">
                    <td>
                        <div class="collapse" id="collapse${release.id}" data-parent=".table-downloads">
                            ${releaseInfo}
                        </div>
                    </td>
                </tr>
            `);
        }

        if (totalDownloadCount > 0) {
            $(".total-downloads").text("Total downloads: " + totalDownloadCount.toLocaleString());
        }

        $(".fa-spin").hide();
        $(".table-downloads").fadeIn();

        if (json.length < perPage) return;

        page++;
    }
}

function GetParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}