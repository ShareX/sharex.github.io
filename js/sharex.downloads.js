$(document).ready(function() {
    let repo = GetParameterByName("repo");

    if (!repo) {
        repo = "ShareX/ShareX";
    }

    let repoInput = $("#downloads-repo");
    repoInput.val(repo);
    repoInput.keyup(function(e) {
        if (e.keyCode == 13) {
            repo = repoInput.val();
            GetReleases(repo);
            if (repo) {
                SetParameter("repo", repo);
            }
            else {
                ClearParameter();
            }
        }
    });

    GetReleases(repo);
});

async function GetReleases(repo) {
    if (!repo) {
        repo = "ShareX/ShareX";
    }

    $(".table-downloads tbody tr").remove();
    $(".total-downloads").hide();
    $(".total-downloads-value").text("");
    $(".table-downloads").hide();
    $(".fa-spin").show();

    let perPage = 100;
    let page = 1;
    let totalDownloadCount = 0;
    let previousPublishedAt = new Date();

    while (true) {
        let response = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=${perPage}&page=${page}`);
        if (!response.ok) break;

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
                downloadCount += asset.download_count;
                let fileSize = asset.size / 1024 / 1024;
                releaseInfo += `
                    <a href="${asset.browser_download_url}">
                        <div class="downloads-asset-info">
                            ${EscapeHtml(asset.name)}
                            <span><i class="fa-solid fa-file"></i>${fileSize.toFixed(2)} MB</span>
                            <span><i class="fa-solid fa-arrow-down"></i>${asset.download_count.toLocaleString()}</span>
                        </div>
                    </a>
                `;
            }
            totalDownloadCount += downloadCount;
            let publishedAt = new Date(release.published_at);
            let activeDays = (previousPublishedAt - publishedAt) / (1000 * 60 * 60 * 24);
            previousPublishedAt = publishedAt;

            $(".table-downloads tbody").append(`
                <tr class="downloads-release-info collapsed" data-toggle="collapse" data-target="#collapse${release.id}">
                    <td>
                        <i class="fa fa-fw"></i>${EscapeHtml(release.name)}
                        ${release.prerelease ? '<div class="float-right"><span class="badge badge-danger">Pre-release</span></div>' : ""}
                    </td>
                    <td>${publishedAt.toLocaleDateString("en-CA")}</td>
                    <td>${activeDays.toFixed(1)}</td>
                    <td>${downloadCount.toLocaleString()}</td>
                </tr>
                <tr class="downloads-assets">
                    <td colspan="100%">
                        <div class="collapse" id="collapse${release.id}" data-parent=".table-downloads">
                            <div class="downloads-assets-container">
                                ${releaseInfo}
                            </div>
                        </div>
                    </td>
                </tr>
            `);
        }

        if (json.length < perPage) break;

        page++;
    }

    if (totalDownloadCount > 0) {
        $(".total-downloads-value").text(totalDownloadCount.toLocaleString());
        $(".total-downloads").fadeIn();
    }

    $(".fa-spin").hide();
    $(".table-downloads").fadeIn();
}