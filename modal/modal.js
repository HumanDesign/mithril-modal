const m = require('mithril');
const style = require('./style');
const animations = require('./animations');
const assignStyles = require('assign-styles');
const Prefixer = require('inline-style-prefixer');
// const customUserAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36'
const prefixer = new Prefixer();
const j2c = require('j2c');

function inline() {
    return j2c.inline(prefixer.prefix(assignStyles.apply(null, arguments)));
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let visible = false;

module.exports.show = function() {
    visible = true;
}

const hide = function() {
    visible = false;
}
module.exports.hide = hide;

let handleKey;

module.exports.onbeforeremove = function() {
    if (handleKey) {
        document.body.removeEventListener('keyup', handleKey);
    }
}

module.exports.oninit = function(vnode) {
    let origColor = style.base.color;

    handleKey = e => {
        if (e.keyCode == 27) { // escape key
            visible = false;
            m.redraw();
        }
    }
    document.body.addEventListener('keyup', handleKey)
}


module.exports.view = vnode => {
    const animKeys = Object.keys(animations);
    const randomAnim = animKeys[getRandomArbitrary(0, animKeys.length - 1)];
    var animation = animations[randomAnim];

    if (vnode.attrs.animation) {
        if (animations[vnode.attrs.animation]) {
            animation = animations[vnode.attrs.animation];
        } else {
            throw new Error(vnode.attrs.animation + ' unknown. Allowed animations are: ' + Object.keys(animations).join(', '));
        }
    }

    return m('div', [ // mithril requires a component to have a root element; just an array won't work
        m("div" /* base */, {
            onclick: hide,
            style: inline(style.base, visible ? style.visible : style.hidden, visible ? animation.base.visible : animation.base.hidden)
        }, [
            m('div' /* dialog */, {
                style: inline(style.dialog, visible ? animation.dialog.visible : animation.dialog.hidden, vnode.attrs.style.dialog)
            }, [
                m("a", {
                    onclick: hide,
                    onmouseover: () => {
                        this.style.color = 'white'
                    },
                    onmouseout: () => {
                        this.style.color = 'black'
                    },
                    style: inline(style.close, vnode.attrs.style.close)
                }, vnode.attrs.close ? vnode.attrs.close : '×'),
                vnode.attrs.inner
            ])
        ]),
        m("div", /* overlay */ {
            style: inline(style.overlay, visible ? style.visible : style.hidden, visible ? animation.overlay.visible : animation.overlay.hidden, vnode.attrs.style.overlay)
        })
    ])
}
