[![Build Status](https://travis-ci.org/akky/watami-lover.svg?branch=master)](https://travis-ci.org/akky/watami-lover)

# What is Watami Lover?

[Watami Lover](https://chrome.google.com/webstore/detail/fake-news-detector/pejpjcimkbhajilhoacpgdadhhohfjdc) is a Chrome Extension to notify you if the page has Watami restaurants.

## How it works

With this Chrome extension, when you visit a page having Watami-owned restaurants, it emphasizes the text.

For the current matched restaurant names, please see the source code [restaurants.js](https://github.com/akky/watami-lover/blob/master/restaurants.js).

## limitations

  * notational variants are mostly not covered.

## unit test

Open .unittest/index.html in your browser will do unit test on restaurant matching logics.

## contribution

### site info

Please change restaurants.js and send me a PR.

### translation

Please add _locales/(your locale)/messages.json , then send me a PR.

### credits

[padolsey/findAndReplaceDOMText: Find and replace DOM text](https://github.com/padolsey/findAndReplaceDOMText) is used to insert highlight and tooltips.

[CSS3 Tooltip](http://www.w3schools.com/css/css_tooltip.asp) is referred to show tooltip on hover.

[QUnit](https://qunitjs.com/) test framework helped me a lot.

