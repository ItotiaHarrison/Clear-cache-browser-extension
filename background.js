// Handle installation event
chrome.runtime.onInstalled.addListener(function() {
    console.log('Extension installed');
});

// send response when message is received
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('Message received!', request, sender);
    sendResponse({ message: 'Message received!' });
  });

  // Listen when a tab is updated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('Tab updated!', tabId, changeInfo, tab);
  });