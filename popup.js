document.addEventListener("DOMContentLoaded", function() {
    const proBtn = document.getElementById("proBtn");

    proBtn.addEventListener("click", function() {
        chrome.tabs.create({
            url: "https://www.virustotal.com/gui/home/url"
        });
    });
});