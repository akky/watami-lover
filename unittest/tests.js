QUnit.test( "add class and tooltip tags to 和民", function( assert ) {

    var b = document.createElement('body');
    b.innerHTML = "<p>これは和民のお店ですか</p>";

    var nameExpression = restaurants.join('|');
    findAndReplaceDOMText(b, {
        find: new RegExp("(" + nameExpression + ")", "gi"),
        replace: function(portion) {
            var elem = document.createElement('span');
            elem.className = 'watami';
            elem.innerHTML = portion.text;
            elem.insertAdjacentHTML(
                'beforeend',
                '<span class="watami_tooltip">'
                + "this_is_a_watami_owned_restaurant"
                + '</span>'
            );
            return elem;
        }
    });

    assert.equal(
        b.innerHTML,
        '<p>これは<span class=\"watami\">和民<span class=\"watami_tooltip\">this_is_a_watami_owned_restaurant</span></span>のお店ですか</p>'
    );

});
