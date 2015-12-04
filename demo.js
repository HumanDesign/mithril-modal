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
                // animation:
                // animation: 'slideFromRight',
                // animation: 'sideFall',
                // animation: 'slideAndStick',
                // animation: '3dFlipHorizontal',
                // animation: '3dSign',
                // animation: 'SuperScaled',
                // animation: 'JustMe',
                // animation: '3dFromBottom',
                animation: '3dSlit',
                // styles can be overridden as well
                style: {
                    dialog: {
                        backgroundColor: '#aaffee',
                        width: '700px'
                    }
                },
                // the close string can be suplied:
                close: '✘',
                // close: '×',
                // close: 'x'
            }, m.component(inner))
        ]
    }
}

// inner component; to be rendered in the modal
var inner = {
    view: function() {
        return m('div',
            m("h1", "Hello world"))
    }
}

m.module(document.getElementById('demo'), demo)
