var m = require('mithril');
var visible = m.prop(false);
var style = require('./style');
var assignStyles = require('assign-styles');
var Prefixer = require('inline-style-prefixer');
// var customUserAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36'
var prefixer = new Prefixer();

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

    ctrl.onunload = function() {
        document.body.removeEventListener('keyup', handleKey)
    }

    ctrl.config = function(element, isInitialized, context) {
        if (!isInitialized) {
            var handleKey = function(e) {
                if (e.keyCode == 27) {
                    visible(false);
                    m.redraw()
                }
            }

            document.body.addEventListener('keyup', handleKey)
        }
    }
}

module.exports.view = function(ctrl, args, extras) {
    args = args || {}
    args.style = args.style || {}

    return m('div', [
        m(".modal", {
            class: [
                visible() ? "modal-visible" : "",
                args.class
            ].join(" "),
            onclick: hide,
            config: ctrl.config,
            style: prefixer.prefix(assignStyles(style.base, visible() ? style.visible : style.hidden))
        }, [
            m(".modal-dialog", {
                style: prefixer.prefix(assignStyles(style.dialog, args.style.dialog)),
            }, [
                m("a", {
                    onclick: hide,
                    onmouseover: function() {
                        this.style.color = 'white'
                    },
                    onmouseout: function() {
                        this.style.color = 'black'
                    },
                    style: prefixer.prefix(assignStyles(style.close, args.style.close))
                }, args.close ? args.close : '×'),
                args.innerComponent ? args.innerComponent : ''
            ])
        ]),
        m(".modal-overlay", {
            style: prefixer.prefix(assignStyles(style.overlay, args.style.overlay))
        })
    ])
}
