'use strict';
var styles = {};

styles.base = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    minWidth: '320px',
    zIndex: 1000,
    height: 'auto',
    transform: 'translateX(-50%) translateY(-50%)',
    filter: ''
};

styles.hidden = {
    visibility: 'hidden'
};

styles.visible = {
    visibility: 'visible',
    backfaceVisibility: 'visible'
};

styles.close = {
    cursor: 'pointer',
    color: 'inherit',
    fontSize: '1.6em',
    fontWeight: 'bold',
    right: '10px',
    position: 'absolute',
    textDecoration: 'none',
    top: '5px'
};

styles.dialog = {
    position: 'relative',
    background: 'silver',
    minHeight: '400px',
    padding: '10px',
    width: '400px'
};

styles.overlay = {
    cursor: 'not-allowed',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: styles.base.zIndex - 1,
    opacity: '0.3',
    transition: 'all 0.3s',
    background: '',
    backgroundColor: 'grey'
};

module.exports = styles;
