// Lists the packages of the latest cross-platform builds, read live from GitHub Actions.
// Builds are started by hand (workflow_dispatch) and keep their packages as run artefacts for 90 days.

const artefactsRepo = "ShareX/ShareX";
const artefactsWorkflow = "platform.yml";
const artefactsBranch = "cross-platform";
const artefactsApi = `https://api.github.com/repos/${artefactsRepo}/actions`;

// Package names follow the release files: ShareX-<version>-<os>-<arch>.
const artefactsKinds = {
    "macos-arm64": { os: "macos", label: "Apple silicon", arch: "arm64", order: 0 },
    "macos-x64": { os: "macos", label: "Intel", arch: "x64", order: 1 },
    "linux-x64": { os: "linux", label: "x64", arch: "x64", order: 0 },
    "linux-arm64": { os: "linux", label: "ARM64", arch: "arm64", order: 1 }
};

document.addEventListener("DOMContentLoaded", LoadArtefacts);

async function LoadArtefacts() {
    try {
        const runs = await GetJson(`${artefactsApi}/workflows/${artefactsWorkflow}/runs?branch=${artefactsBranch}&event=workflow_dispatch&status=success&per_page=10`);
        const builds = [];

        for (const run of runs.workflow_runs || []) {
            const artefacts = await GetJson(`${artefactsApi}/runs/${run.id}/artifacts?per_page=100`);
            const packages = (artefacts.artifacts || []).map(a => ToPackage(run, a)).filter(p => p);
            if (packages.length > 0) {
                builds.push({ run, packages });
            }
        }

        const current = builds.find(b => b.packages.some(p => !p.expired));

        if (!current) {
            ShowStatus("No preview build is available right now. Please check back later.", "fa-solid fa-circle-info");
            return;
        }

        ShowBuild(current);
        ShowHistory(builds.filter(b => b !== current));
        HighlightOwnSystem();
        document.querySelector(".artefacts-status").hidden = true;
    } catch (e) {
        ShowStatus(`Could not reach GitHub (${EscapeHtml(e.message)}). You can find the builds on the
            <a href="https://github.com/${artefactsRepo}/actions/workflows/${artefactsWorkflow}?query=branch%3A${artefactsBranch}">Actions page</a>.`,
            "fa-solid fa-triangle-exclamation");
    }
}

async function GetJson(url) {
    const response = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
    if (response.status === 403 || response.status === 429) throw new Error("rate limit reached, try again in a few minutes");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
}

function ToPackage(run, artefact) {
    const match = /^ShareX-([0-9.]+)-([a-z]+-[a-z0-9]+)$/.exec(artefact.name);
    if (!match || !artefactsKinds[match[2]]) return null;

    return Object.assign({}, artefactsKinds[match[2]], {
        name: artefact.name,
        version: match[1],
        size: artefact.size_in_bytes,
        expired: artefact.expired,
        expires: new Date(artefact.expires_at),
        url: `https://github.com/${artefactsRepo}/actions/runs/${run.id}/artifacts/${artefact.id}`
    });
}

function ShowBuild(build) {
    const run = build.run;
    const commit = run.head_sha.substring(0, 9);
    const message = (run.head_commit && run.head_commit.message || "").split("\n")[0];
    const version = build.packages[0].version;

    const header = document.querySelector(".artefacts-build");
    header.querySelector(".artefacts-version").textContent = `ShareX ${version}`;
    const commitLink = header.querySelector(".artefacts-commit");
    commitLink.textContent = commit;
    commitLink.href = `https://github.com/${artefactsRepo}/commit/${run.head_sha}`;
    header.querySelector(".artefacts-message").textContent = message;
    header.querySelector(".artefacts-date").textContent = `Built ${FormatDate(new Date(run.updated_at))}`;
    header.querySelector(".artefacts-run").href = run.html_url;
    header.hidden = false;

    for (const os of ["macos", "linux"]) {
        const files = document.querySelector(`.artefacts-os[data-os="${os}"] .artefacts-files`);
        const packages = build.packages.filter(p => p.os === os).sort((a, b) => a.order - b.order);

        files.innerHTML = packages.length === 0
            ? `<div class="artefacts-file artefacts-file-missing">Not in this build</div>`
            : packages.map(FileHtml).join("");
    }

    document.querySelector(".artefacts-grid").hidden = false;
    document.querySelector(".artefacts-footnote").hidden = false;
}

function FileHtml(p) {
    if (p.expired) {
        return `<div class="artefacts-file artefacts-file-missing">
            <span class="artefacts-file-name">${EscapeHtml(p.label)}</span>
            <span class="artefacts-file-detail">Expired</span>
        </div>`;
    }

    return `<a class="artefacts-file" href="${p.url}" data-arch="${p.arch}">
        <span class="artefacts-file-name"><i class="fa-solid fa-download"></i>${EscapeHtml(p.label)}</span>
        <span class="artefacts-file-detail">${EscapeHtml(p.name)} &middot; ${FormatSize(p.size)} &middot; until ${FormatDate(p.expires)}</span>
    </a>`;
}

function ShowHistory(builds) {
    const rows = builds.slice(0, 5).map(b => {
        const files = b.packages.sort((x, y) => x.name.localeCompare(y.name)).map(p => p.expired
            ? `<span class="artefacts-history-expired">${EscapeHtml(p.os)} ${EscapeHtml(p.arch)}</span>`
            : `<a href="${p.url}">${EscapeHtml(p.os)} ${EscapeHtml(p.arch)}</a>`).join(" ");

        return `<tr>
            <td>${FormatDate(new Date(b.run.updated_at))}</td>
            <td><a href="https://github.com/${artefactsRepo}/commit/${b.run.head_sha}">${b.run.head_sha.substring(0, 9)}</a></td>
            <td class="artefacts-history-files">${files}</td>
        </tr>`;
    });

    if (rows.length > 0) {
        document.querySelector(".table-artefacts-history tbody").innerHTML = rows.join("");
        document.querySelector(".artefacts-history").hidden = false;
    }
}

// Marks the card for the visitor's system. Browsers do not reliably report a Mac's CPU, so both macOS files stay equal.
function HighlightOwnSystem() {
    const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent;
    let os = null;

    if (/mac/i.test(platform)) os = "macos";
    else if (/win/i.test(platform)) os = "windows";
    else if (/linux|x11/i.test(platform) && !/android/i.test(navigator.userAgent)) os = "linux";

    if (os) {
        const card = document.querySelector(`.artefacts-os[data-os="${os}"]`);
        card.classList.add("artefacts-os-yours");
        card.querySelector("h2").insertAdjacentHTML("beforeend", `<span class="artefacts-yours">Your system</span>`);
    }
}

function ShowStatus(html, icon) {
    const status = document.querySelector(".artefacts-status");
    status.innerHTML = `<i class="${icon}"></i><span>${html}</span>`;
    status.hidden = false;
}

function FormatSize(bytes) {
    return `${Math.round(bytes / 1048576)} MB`;
}

function FormatDate(date) {
    return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
