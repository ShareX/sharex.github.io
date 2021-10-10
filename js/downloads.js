$(document).ready(function() {
    var repo = GetParameterByName("repo");
    if (!repo) {
        repo = "ShareX/ShareX";
    }
    GetReleases(repo);
});

function GetReleases(repo) {
    $.getJSON("https://api.github.com/repos/" + repo + "/releases?per_page=100").done(function(json) {
        var totalDownloadCount = 0;
        previousPublishedAt = moment();

        for (var i = 0; i < json.length; i++) {
            var release = json[i];
            if (release.assets.length === 0) {
                continue;
            }
            var assets = release.assets.sort((a, b) => b.name.endsWith(".exe") - a.name.endsWith(".exe"));
            var asset = assets[0];
            var fileSize = asset.size / 1024 / 1024;
            var downloadCount = 0;
            for (var i2 = 0; i2 < release.assets.length; i2++) {
                downloadCount += release.assets[i2].download_count;
            }
            totalDownloadCount += downloadCount;
            var publishedAt = moment(release.published_at);
            var activeDays = previousPublishedAt.diff(publishedAt, "days", true);
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
                        .text(moment(publishedAt).format("YYYY-MM-DD HH:mm"))
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
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}