var m = require('mithril');
var modal = require('./modal/modal.js');

// top level
var demo = {
    view: function(ctrl) {
        return [
            m("button[type=button]", {
                onclick: function() {
                    modal.show();
                }
            }, "Click to show modal"),
            m.component(modal, {
                innerComponent: m.component(inner),
                class: 'modal-animation-8',
                // close: '✘',
                // close: '×',
                // close: 'x'
            })
        ]
    }
}

// inner component; to be rendered in the modal
var inner = {
    controller: function() {},
    view: function() {
        return m('.div',
        m("h1", "Helo world"))
    }
}

m.module(document.body, demo)
