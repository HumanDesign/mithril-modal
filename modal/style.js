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

module.exports.close = {
    cursor: 'pointer',
    color: 'inherit',
	'font-size': '1.6em',
	'font-weight': 'bold',
	right: '10px',
	position: 'absolute',
	'text-decoration': 'none',
	top: '5px'
}

module.exports.dialog = {
    position: 'relative',
    background: 'silver',
    'min-height': '400px',
    'padding': '10px',
    width: '400px'
}

module.exports.overlay = {
    position: 'fixed',
	width: '100%',
	height: '100%',
	visibility: 'hidden',
	top: '0',
	left: '0',
	'z-index': module.exports.base['z-index'] - 1,
	opacity: '0'
}
