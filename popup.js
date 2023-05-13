
chrome.runtime.onMessage.addListener(function(request, sender) {
  

    if (request.action == "getSource") {
      message.innerText = "Sending message..."; // request.source;
    }
  });
  
  function onWindowLoad() {

  
    chrome.tabs.executeScript(null, {
      file: "getPagesSource.js"
    }, function() {

    });
  
  }
  
  window.onload = onWindowLoad;