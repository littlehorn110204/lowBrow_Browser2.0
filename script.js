function goHome() {
    document.getElementById("myWebview").loadURL("https://duckduckgo.com");
}

function goBack() {
    document.getElementById("myWebview").goBack();
}

function goForward() {
    document.getElementById("myWebview").goForward();
}

function go() {
    document.getElementById("myWebview").loadURL(document.getElementById("url").value);
}

function lowBrow() {
    document.getElementById("myWebview").loadURL("https://cybermap.kaspersky.com")
}