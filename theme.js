// ── Aspiron Education: shared theme engine ──
(function() {
  const savedPalette = localStorage.getItem("aspiron_palette") || "blue";
  const savedMode = localStorage.getItem("aspiron_mode") || "dark";
  document.documentElement.setAttribute("data-palette", savedPalette);
  document.documentElement.setAttribute("data-theme", savedMode);

  window.setPalette = function(p) {
    document.documentElement.setAttribute("data-palette", p);
    localStorage.setItem("aspiron_palette", p);
    renderThemeBar();
  };

  window.toggleMode = function() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("aspiron_mode", next);
    const btn = document.getElementById("modeToggleBtn");
    if (btn) btn.textContent = next === "dark" ? "🌙" : "☀️";
  };

  function renderThemeBar() {
    const bar = document.getElementById("themeToggleBar");
    if (!bar) return;
    const palettes = [
      { id: "gray", color: "#9CA3AF" },
      { id: "blue", color: "#22D3EE" },
      { id: "green", color: "#10B981" },
      { id: "purple", color: "#A78BFA" }
    ];
    const current = document.documentElement.getAttribute("data-palette");
    let html = "";
    palettes.forEach(p => {
      html += "<div class=\"paletteDot" + (p.id === current ? " active" : "") + "\" style=\"background:" + p.color + ";\" onclick=\"window.setPalette('" + p.id + "')\"></div>";
    });
    const mode = document.documentElement.getAttribute("data-theme");
    html += "<button id=\"modeToggleBtn\" onclick=\"window.toggleMode()\">" + (mode === "dark" ? "🌙" : "☀️") + "</button>";
    bar.innerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", renderThemeBar);
})();
