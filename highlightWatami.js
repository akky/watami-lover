var nameExpression = restaurants.join('|');

// highlight restaurants names
findAndReplaceDOMText(document.body, {
    find: new RegExp("(" + nameExpression + ")", "gi"),
    replace: function(portion) {
        var elem = document.createElement('span');
        elem.className = 'watami';
        elem.innerHTML = portion.text;
        elem.insertAdjacentHTML(
            'beforeend',
            '<span class="watami_tooltip">'
            + chrome.i18n.getMessage("this_is_a_watami_owned_restaurant")
            + '</span>'
        );
        return elem;
    }
});
