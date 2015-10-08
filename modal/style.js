'use strict';

var Prefixer = require('inline-style-prefixer');
// var customUserAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36'
var prefixer = new Prefixer();

var styles = {};

styles.base = {
    position: 'fixed',
	top: '50%',
	left: '50%',
	minWidth: '320px',
	height: 'auto',
	zIndex: '10000',
	transform: 'translateX(-50%) translateY(-50%)'
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

Object.keys(styles).forEach(function (key) {
    styles[key] = prefixer.prefix(styles[key]);
})

module.exports = styles;
