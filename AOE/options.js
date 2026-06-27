// options.js

// loading
chrome.storage.local.get("savedIframeUrl", (data) => {
  if (data.savedIframeUrl) document.getElementById("iframeUrl").value = data.savedIframeUrl;
});

// save
document.getElementById("save").addEventListener("click", () => {
  const iframeUrl = document.getElementById("iframeUrl").value.trim();

  chrome.storage.local.set({ "savedIframeUrl": iframeUrl }, () => {
    document.getElementById("status").textContent = "Config saved！";
    setTimeout(() => { document.getElementById("status").textContent = ""; }, 2000);
  });
});
