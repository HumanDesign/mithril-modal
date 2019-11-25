var j2c = require('j2c');
var keyframes = {
    '@keyframes slit': {
        '50%': {
            transform: 'translateZ(-250px) rotateY(89deg)',
            opacity: 1,
            'animation-timing-function': 'ease-in'
        },
        '100%': {
            transform: 'translateZ(0) rotateY(0deg)',
            opacity: 1
        }
    }
};

var head = document.getElementsByTagName('head')[0];
var styleEl = document.createElement('style');
var keyframesStyle = j2c.sheet(keyframes);
styleEl.innerHTML = keyframesStyle;
head.appendChild(styleEl);

module.exports = keyframesStyle;
