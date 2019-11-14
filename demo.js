const m = require('mithril');
const modal = require('./modal/modal.js');

// inner component; to be rendered in the modal
const inner = m({
    view: () => {
        return m('div',
            m("h1", "Hello world"))
    }
});

const demo = {
    view: () => {
        return [
            m("button[type=button]", {
                onclick: function() {
                    modal.show();
                }
            }, "Click to show modal"),
            m(modal, {
                // animation: 'none',
                // animation: 'fadeAndScale',
                // animation: 'slideFromRight',
                // animation: 'slideFromBottom',
                // animation: 'newspaper',
                // animation: 'fall',
                // animation: 'sideFall',
                // animation: 'slideAndStick',
                // animation: '3dFlipHorizontal',
                // animation: '3dFlipVertical',
                // animation: '3dSign',
                // animation: 'SuperScaled',
                // animation: 'JustMe',
                // animation: '3dFromBottom',
                // animation: '3dFromLeft',
                animation: '3dSlit',
                // animation: 'blur',
                // styles can be overridden as well
                style: {
                    dialog: {
                        backgroundColor: '#aaf3ee',
                        width: '700px'
                    }
                },
                // the close string can be suplied:
                close: '✘',
                // close: '×',
                // close: 'x'

                // inner dialog component
                inner: inner
            })
        ]
    }
}

m.mount(document.getElementById('demo'), demo);
