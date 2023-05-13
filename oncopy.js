// on copy event, send a message to background.html
function onCopy(e) {
    chrome.extension.sendRequest({event: "copy"});
}
// on copy event, send a message to background.html
function onPaste(e) {
    chrome.extension.sendRequest({event: "paste"});
}

//register event listener for copy events on document
document.addEventListener('copy',onCopy,true);

//register event listener for copy events on document
document.addEventListener('paste',onPaste,true);
