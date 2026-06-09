// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/static/js/sw.js")
      .then(reg => console.log("SW registered:", reg.scope))
      .catch(err => console.log("SW failed:", err));
  });
}

// ── Install banner ─────────────────────────────────────────────
let deferredPrompt;
const banner = document.getElementById("installBanner");
const installBtn = document.getElementById("installBtn");
const dismissBtn = document.getElementById("dismissBtn");

// Browser fires this when the app is installable
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  // Show the banner after a short delay
  setTimeout(() => banner.classList.add("show"), 2000);
});

installBtn.addEventListener("click", async () => {
  banner.classList.remove("show");
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log("Install outcome:", outcome);
  deferredPrompt = null;
});

dismissBtn.addEventListener("click", () => {
  banner.classList.remove("show");
});

// Hide banner if already installed
window.addEventListener("appinstalled", () => {
  banner.classList.remove("show");
  deferredPrompt = null;
});