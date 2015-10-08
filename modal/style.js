module.exports.base = {
    position: 'fixed',
	top: '50%',
	left: '50%',
	'min-width': '320px',
	height: 'auto',
	'z-index': '10000',
    '-webkit-transform': 'translateX(-50%) translateY(-50%)',
    '-moz-transform': 'translateX(-50%) translateY(-50%)',
	'-ms-transform': 'translateX(-50%) translateY(-50%)',
	'transform': 'translateX(-50%) translateY(-50%)'
}

module.exports.hidden = {
	visibility: 'hidden',
	'-webkit-backface-visibility': 'hidden',
	'-moz-backface-visibility': 'hidden',
	'backface-visibility': 'hidden'
}

module.exports.visible = {
	visibility: 'visible',
	'-webkit-backface-visibility': 'visible',
	'-moz-backface-visibility': 'visible',
	'backface-visibility': 'visible'
}
