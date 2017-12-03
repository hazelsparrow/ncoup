import {extendObservable, action} from 'mobx';
import {api} from '../../core';
import game from '../../game';
/*global window*/

// borrowed from: https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData("Text", text);
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
  }
}

class RoomStore {
  constructor() {
    extendObservable(this, {
      notFound: false,
      linkCopied: false,
      game
    });
  }

  load = action(async () => {
    const {key} = this.router.match.params;
    this.game.roomId = key;

    try {
      await api.get(`rooms/${key}`);
    } catch (e) {
      this.notFound = true;
    }
  });

  copyLink = action((url) => {
    copyToClipboard(url);
    this.linkCopied = true;

    setTimeout(() => {
      this.linkCopied = false;
    }, 2000);
  });
}

export default RoomStore;
