'use strict';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "clicked_wlj") clearWatchLater();
});

function clearWatchLater() {
  let videos = document.querySelector('#contents.ytd-playlist-video-list-renderer').childNodes,
      popup  = document.querySelector('ytd-popup-container.ytd-app'),
      last   = videos.length - 1;

  popup.style.display = 'none';

  videos.forEach(async (el, i) => {
    await new Promise(resolve => setTimeout(() => resolve(el.querySelector('yt-icon-button').click()), 300 * ++i));
    popup.querySelector('tp-yt-paper-listbox [has-separator]').nextSibling.click();
    if (i === last) popup.style.display = '';
  });
}