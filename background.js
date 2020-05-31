browser.browserAction.onClicked.addListener(() => {
	browser.tabs.create({"url": "/index.html"});
});

browser.tabs.onActivated.addListener(function (activeInfo) {
	browser.tabs.get(activeInfo.tabId)
		.then(function (tabInfo) {
			console.log(tabInfo);
		})
		.catch(function (error) {
			console.log(error);
		});
});
