var m = require('mithril');
var visible = m.prop(false);
var style = require('./style');
var animations = require('./animations');
var assignStyles = require('assign-styles');
var Prefixer = require('inline-style-prefixer');
// var customUserAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36'
var prefixer = new Prefixer();

var j2c = require('j2c');

function inline() {
    return j2c.inline(prefixer.prefix(assignStyles.apply(null, arguments)));
}

module.exports.show = function() {
    visible(true);
}

var hide = function() {
    visible(false);
}
module.exports.hide = hide;

module.exports.controller = function(args, extras) {
    var ctrl = this;
    var origColor = style.base.color;
    var handleKey;

    ctrl.onunload = function() {
        if (handleKey) {
            document.body.removeEventListener('keyup', handleKey);
        }
    }

    ctrl.config = function(element, isInitialized, context) {
        if (!isInitialized) {
            handleKey = function(e) {
                if (e.keyCode == 27) { // escape key
                    visible(false);
                    m.redraw();
                }
            }
            document.body.addEventListener('keyup', handleKey)
        }
    }
}
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports.view = function(ctrl, args, extras) {
    args = args || {};
    args.style = args.style || {};

    var animKeys = Object.keys(animations);
    var randomAnim = animKeys[getRandomArbitrary(0, animKeys.length - 1)];

    var animation = animations[randomAnim];

    if (args.animation) {
        if (animations[args.animation]) {
            animation = animations[args.animation];
        } else {
            throw new Error(args.animation + ' unknown. Allowed animations are: ' + Object.keys(animations).join(', '));
        }
    }

    return m('div', [ // mithril requires a component to have a root element; just an array won't work
        m("div" /* base */, {
            onclick: hide,
            config: ctrl.config,
            style: inline(style.base, visible() ? style.visible : style.hidden, visible() ? animation.base.visible : animation.base.hidden)
        }, [
            m('div' /* dialog */, {
                style: inline(style.dialog, visible() ? animation.dialog.visible : animation.dialog.hidden, args.style.dialog)
            }, [
                m("a", {
                    onclick: hide,
                    onmouseover: function() {
                        this.style.color = 'white'
                    },
                    onmouseout: function() {
                        this.style.color = 'black'
                    },
                    style: inline(style.close, args.style.close)
                }, args.close ? args.close : '×'),
                extras
            ])
        ]),
        m("div", /* overlay */ {
            style: inline(style.overlay, visible() ? style.visible : style.hidden, visible() ? animation.overlay.visible : animation.overlay.hidden, args.style.overlay)
        })
    ])
}
