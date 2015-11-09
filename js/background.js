
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

	// Inject CSS into the current tab
	chrome.tabs.insertCSS(null, {file: "css/content-style.css"});
	chrome.tabs.insertCSS(null, {file: "css/font-awesome.css"});

	// Inject scripts into the current tab
	chrome.tabs.executeScript(null, {file: "js/accounting.js"});
	chrome.tabs.executeScript(null, {file: "js/numeral.js"});
	chrome.tabs.executeScript(null, {file: "js/content-script.js"});
});
