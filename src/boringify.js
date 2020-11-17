document.addEventListener("DOMContentLoaded", function(){
    // Boringfy on click
    document.getElementById("button").addEventListener("click", function(){
        chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "boringfy")
        })
    });
})

// Auto Boringfys
setInterval(function(){
    chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, "boringfy")
    })
}, 1000);