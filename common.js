'use strict';

chrome.app.runtime.onLaunched.addListener(function() {
  const screenWidth = screen.availWidth;
  const screenHeight = screen.availHeight;
  const width = 1000;
  const height = 600;

  chrome.app.window.create('data/window/index.html', {
    id: 'evernotewebview',
    outerBounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth - width) / 2),
      top: Math.round((screenHeight - height) / 2)
    }
  });
});
