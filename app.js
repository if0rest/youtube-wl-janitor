chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "clicked_wlj") {
      clearWatchLater();
    }
  }
);

function clearWatchLater() {
  let videos = document.querySelector('#contents.ytd-playlist-video-list-renderer').childNodes,
      popup  = document.querySelector('ytd-popup-container.ytd-app'),
      last   = videos.length - 1;

  popup.style.display = 'none';

  videos.forEach((el, i) => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        el.querySelector('yt-icon-button').click();
        resolve('done');
      }, 300 * i);
    });

    promise.finally(() => {
      popup.querySelector('tp-yt-paper-listbox [has-separator]').nextSibling.click();
      if (i === last) popup.style.display = '';
    });
  });
}