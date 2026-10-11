// easy.js: Easy Mode for every page
(function () {
  var KEY = "voteSaathiEasy";

  // Remember the choice, so it stays on when you open another page
  function wasOn() {
    try { return localStorage.getItem(KEY) === "on"; } catch (e) { return false; }
  }
  function remember(on) {
    try { localStorage.setItem(KEY, on ? "on" : "off"); } catch (e) {}
  }

  // Update the text of every Easy Mode button
  function refreshButtons() {
    var on = document.body.classList.contains("easy");
    document.querySelectorAll(".easy-toggle").forEach(function (b) {
      b.textContent = on ? b.dataset.on : b.dataset.off;
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function toggle() {
    var on = document.body.classList.toggle("easy");
    remember(on);
    refreshButtons();
  }

  // If a page has no Easy Mode button, add a floating one
  if (!document.querySelector(".easy-toggle")) {
    var f = document.createElement("button");
    f.className = "easy-toggle easy-float";
    f.dataset.on = "Easy Mode: ON";
    f.dataset.off = "Easy Mode";
    document.body.appendChild(f);
  }

  document.querySelectorAll(".easy-toggle").forEach(function (b) {
    b.addEventListener("click", toggle);
  });

  if (wasOn()) document.body.classList.add("easy");
  refreshButtons();
})();