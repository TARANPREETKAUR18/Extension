// Add click event listener to the save button
document.getElementById('saveButton').addEventListener('click', function(event) {
    console.log("Button clicked");
    event.preventDefault();
    getTabIdAndExecuteContentScript();
});

// Function to get the ID of the current active tab and execute content script
function getTabIdAndExecuteContentScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs && tabs.length > 0) {
            const activeTabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: {tabId: activeTabId, allFrames: false},
                files: ['contentScript.js']
            });
        }
    });
}
