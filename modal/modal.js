var m = require('mithril');
var visible = m.prop(false);
var style = require('./style');
var animations = require('./animations');

var assignStyles = require('assign-styles');
var Prefixer = require('inline-style-prefixer');
// var customUserAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36'
var prefixer = new Prefixer();

var j2c = require('j2c');

module.exports.show = function() {
    visible(true);
    // m.redraw();
}

var hide = function() {
    visible(false);
    // m.redraw()
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
                if (e.keyCode == 27) {
                    visible(false);
                }
            }

            document.body.addEventListener('keyup', handleKey)
        }
    }
}

module.exports.view = function(ctrl, args, extras) {
    // console.log('visible ' + visible());

    args = args || {}
    args.style = args.style || {}

    var animation = animations['none'];
    if (args.animation) {
        if (animations[args.animation]) {
            animation = animations[args.animation];
        } else {
            throw new Error(args.animation + ' unknown. Allowed animations are: ' + Object.keys(animations))
        }
    }

    // console.log(prefixer.prefix(assignStyles(style.dialog, visible() ? animation.visible.dialog : animation.hidden.dialog, args.style.dialog)));


    return m('div', [
        m("div" /* container */, {
            onclick: hide,
            config: ctrl.config,
            style: j2c.inline(prefixer.prefix(assignStyles(style.base, visible() ? animation.container.visible : animation.container.hidden)))
        }, [
            m('div' /* dialog */, {
                style: j2c.inline(prefixer.prefix(assignStyles(style.dialog, visible() ? animation.dialog.visible : animation.dialog.hidden, args.style.dialog)))
            }, [
                m("a", {
                    onclick: hide,
                    onmouseover: function() {
                        this.style.color = 'white'
                    },
                    onmouseout: function() {
                        this.style.color = 'black'
                    },
                    style: j2c.inline(prefixer.prefix(assignStyles(style.close, args.style.close)))
                }, args.close ? args.close : '×'),
                args.innerComponent ? args.innerComponent : ''
            ])
        ]),
        m(".modal-overlay", /* overlay */ {
            style: prefixer.prefix(assignStyles(style.overlay, visible() ? animation.overlay.visible : animation.overlay.hidden, args.style.overlay))
        })
    ])
}
