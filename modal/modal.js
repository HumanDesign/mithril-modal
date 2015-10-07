var m = require('mithril');
var visible = m.prop(false);

module.exports.show = function() {
    visible(true);
}

var hide = function() {
    visible(false);
}
module.exports.hide = hide;

module.exports.controller = function(args, extras) {
    var ctrl = this;

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
    return m('div', [
        m(".modal", {
            class: [
                visible() ? "modal-visible" : "",
                args.class
            ].join(" "),
            onclick: hide,
            config: ctrl.config
        }, [
            m(".modal-dialog", [
                m("a.modal-close", {
                    onclick: hide,
                    style: {
                        cursor: 'pointer'
                    }
                }, "X"),
                args.view ? args.view() : ''
            ])
        ]),
        m(".modal-overlay")
    ])
}
