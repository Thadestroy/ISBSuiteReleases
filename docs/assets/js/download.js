(() => {
  const statusEl = document.getElementById("release-status");
  const metaEl = document.getElementById("release-meta");
  const btn = document.getElementById("download-installer");
  if (!statusEl || !btn) return;

  const api = "https://api.github.com/repos/Thadestroy/ISBSuiteReleases/releases/latest";
  const fallback = "https://github.com/Thadestroy/ISBSuiteReleases/releases/latest";

  function pickInstaller(assets) {
    if (!Array.isArray(assets)) return null;
    const exes = assets.filter((a) => /\.exe$/i.test(a.name || ""));
    const setup = exes.find((a) => /setup/i.test(a.name || ""));
    return setup || exes[0] || null;
  }

  function formatBytes(n) {
    if (!n && n !== 0) return "";
    if (n < 1024 * 1024) return `${Math.round(n / 1024)} KB`;
    return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  }

  fetch(api, { headers: { Accept: "application/vnd.github+json" } })
    .then((r) => {
      if (!r.ok) throw new Error("release lookup failed");
      return r.json();
    })
    .then((release) => {
      const asset = pickInstaller(release.assets);
      const tag = release.tag_name || release.name || "latest";
      const published = release.published_at
        ? new Date(release.published_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";

      if (asset?.browser_download_url) {
        btn.href = asset.browser_download_url;
        btn.textContent = `Download ${asset.name}`;
        statusEl.textContent = tag;
        if (metaEl) {
          metaEl.hidden = false;
          metaEl.textContent = [published, formatBytes(asset.size)].filter(Boolean).join(" | ");
        }
      } else {
        btn.href = release.html_url || fallback;
        statusEl.textContent = `${tag} - open the release page for the installer.`;
      }
    })
    .catch(() => {
      statusEl.textContent = "GitHub is unreachable right now. Use the button to open releases.";
      btn.href = fallback;
      btn.textContent = "Open latest release";
    });
})();
