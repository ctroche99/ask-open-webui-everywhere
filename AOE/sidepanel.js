const webview = document.getElementById('targetFrame');

// Load the configured Open WebUI URL into the side panel.
function loadIframe() {
  chrome.storage.local.get("savedIframeUrl", (data) => {
    if (data.savedIframeUrl) {
      console.log("Loading sidebar URL:", data.savedIframeUrl);
      webview.src = data.savedIframeUrl;
    } else {
      // If not configured, provide a default value or hint
      webview.srcdoc = "<h3>Please configure the URL in the extension options first.</h3>";
    }
  });
};

loadIframe();
