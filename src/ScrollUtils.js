"use strict";
var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(fun) {setTimeout(fun, 1000 / 60);};

function scrollTo(element, endOffset, params) {
    var startOffset;
    var scrollProp;
    if (params.horizontal) {
        startOffset = element.scrollLeft;
        scrollProp = 'scrollLeft';
    } else if (params.vertical) {
        startOffset = element.scrollTop;
        scrollProp = 'scrollTop';
    }

    var distance = endOffset - startOffset;
    var forward = true;
    if (distance == 0) {
        return;
    }

    forward = (distance > 0);

    function scroll() {
        var speed = 2 + Math.abs(endOffset - startOffset) / 5;
        if (!forward) {
            speed = -speed;
        }
        startOffset += speed;
        element[scrollProp] = startOffset;
        if (startOffset < endOffset && speed > 0 || startOffset > endOffset && speed < 0) {
            raf(scroll);
        }
    }

    scroll();
}

exports.scrollLeft = function(element, endOffset) {
    scrollTo(element, endOffset, {horizontal: true});
};