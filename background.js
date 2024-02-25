
browser.menus.create({ id: "mid", title: "Download images" });

function downloadImages(tabs) {
    for (const tab in tabs) {
        if (tabs[tab]["title"].includes(".jpg") || tabs[tab]["title"].includes(".png") || tabs[tab]["title"].includes(".webp")) {
            browser.downloads.download({ url: tabs[tab]["url"] })
            browser.tabs.remove(tabs[tab]["id"])
        }
    }
}

browser.menus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "mid") {
        browser.tabs.query({}).then(downloadImages)
    }
})