'use strict';
var styles = {};

styles.base = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    minWidth: '320px',
    height: 'auto',
    transform: 'translateX(-50%) translateY(-50%)'
}

if (Number.MAX_SAFE_INTEGER) {
    styles.base.zIndex = Number.MAX_SAFE_INTEGER;
} else {
    styles.base.zIndex = 9007199254740991;
}

styles.hidden = {
    visibility: 'hidden'
}

styles.visible = {
    visibility: 'visible',
    backfaceVisibility: 'visible'
}

styles.close = {
    cursor: 'pointer',
    color: 'inherit',
    fontSize: '1.6em',
    fontWeight: 'bold',
    right: '10px',
    position: 'absolute',
    textDecoration: 'none',
    top: '5px'
}

styles.dialog = {
    position: 'relative',
    background: 'silver',
    minHeight: '400px',
    padding: '10px',
    width: '400px'
}

styles.overlay = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    visibility: 'hidden',
    top: '0',
    left: '0',
    zIndex: styles.base['zIndex'] - 1,
    opacity: '0'
}

module.exports = styles;
