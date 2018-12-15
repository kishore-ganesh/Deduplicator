window.onload = () => {
  console.log("LOADED");
  $("#close").click(() => {
    //make this for all windows
    console.log("clicked");
    tabs = {};

    browser.tabs.query({ currentWindow: true }).then(windowTabs => {
      for (let i = 0; i < windowTabs.length; i++) {
        let tab = windowTabs[i];
        if (tabs[tab.url] == undefined) {
          tabs[tab.url] = tab.id;
        } else {
            browser.tabs.remove(tabs[tab.url]);
          tabs[tab.url] = tab.id;
        }
      }
    });
  });
};

//More recent open, older closed?
