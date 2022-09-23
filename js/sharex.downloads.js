$(document).ready(function() {
    let repo = GetParameterByName("repo");

    if (!repo) {
        repo = "ShareX/ShareX";
    }

    GetReleases(repo);
});

function GetReleases(repo) {
    $.getJSON("https://api.github.com/repos/" + repo + "/releases?per_page=100").done(function(json) {
        let totalDownloadCount = 0;
        let previousPublishedAt = new Date();

        for (let i = 0; i < json.length; i++) {
            let release = json[i];
            if (release.assets.length === 0) {
                continue;
            }
            let assets = release.assets.sort((a, b) => b.name.endsWith(".exe") - a.name.endsWith(".exe") || b.download_count - a.download_count);
            let asset = assets[0];
            let fileSize = asset.size / 1024 / 1024;
            let downloadCount = 0;
            for (let i2 = 0; i2 < release.assets.length; i2++) {
                downloadCount += release.assets[i2].download_count;
            }
            totalDownloadCount += downloadCount;
            let publishedAt = new Date(release.published_at);
            let activeDays = (previousPublishedAt - publishedAt) / (1000 * 60 * 60 * 24);
            previousPublishedAt = publishedAt;
            $(".table-downloads tbody")
                .append($("<tr>")
                    .append($("<td>")
                        .append($("<a>")
                            .attr("href", release.html_url)
                            .text(asset.name)
                        )
                        .append(release.prerelease ? "<div class=\"float-right\"><span class=\"badge badge-danger\">Pre-release</span></div>" : "")
                    )
                    .append($("<td>")
                        .append($("<a>")
                            .attr("href", asset.browser_download_url)
                            .text(fileSize.toFixed(2) + " MB")
                        )
                    )
                    .append($("<td>")
                        .text(publishedAt.toLocaleDateString("en-CA"))
                    )
                    .append($("<td>")
                        .text(activeDays.toFixed(1))
                    )
                    .append($("<td>")
                        .text(downloadCount.toLocaleString())
                    )
                );
        }

        if (totalDownloadCount > 0) {
            $(".total-downloads").text("Total downloads: " + totalDownloadCount.toLocaleString());
        }

        $(".fa-spin").hide();
        $(".table-downloads").fadeIn();
    });
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