
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

	// Inject CSS into the current tab
	chrome.tabs.insertCSS(null, {file: "content-style.css"});
	chrome.tabs.insertCSS(null, {file: "font-awesome.css"});

	// Inject scripts into the current tab
	chrome.tabs.executeScript(null, {file: "accounting.js"});
	chrome.tabs.executeScript(null, {file: "numeral.js"});
	chrome.tabs.executeScript(null, {file: "content-script.js"});
});
