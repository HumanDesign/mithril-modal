var keyframes = require('./keyframes');

var animations = {
    'none': {
        overlay: {
            hidden: {
        },
            visible: {

            }
        },
        base: {
            hidden: {

            },
            visible: {

            }
        },
        dialog: {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            }
        },
    },
    fadeAndScale: {
        overlay: {
            hidden: {

            },
            visible: {

            }
        },
        base: {
            hidden: {

            },
            visible: {

            }
        },
        dialog: {
            hidden: {
                opacity: 0,
                transform: 'scale(0.7)',
                transition: 'all 0.3s'
            },
            visible: {
                opacity: 1,
                transform: 'scale(1)'
            }
        },
    },
    slideFromRight: {
        overlay: {
            hidden: {
            },
            visible: {
            }
        },
        base: {
            hidden: {
            },
            visible: {
            }
        },
        dialog: {
            hidden: {
                transform: 'translateX(20%)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9)',
                opacity: 0
            },
            visible: {
                filter: '',
                transform: 'translateX(0)',
                opacity: 1
            }
        }
    },
    slideFromBottom: {
        overlay: {
            hidden: {
            },
            visible: {
            }
        },
        base: {
            hidden: {
            },
            visible: {
            }
        },
        dialog: {
            hidden: {
                transform: 'translateY(20%)',
                transition: 'all 0.3s',
                opacity: 0
            },
            visible: {
                filter: '',
                transform: 'translateY(0)',
                opacity: 1
            }
        }
    },
    newspaper: {
        overlay: {
            hidden: {
            },
            visible: {
                transition: 'all 0.5s',
            }
        },
        base: {
            hidden: {
            },
            visible: {
                filter: ''
            }
        },
        dialog: {
            hidden: {
                transform: 'scale(0) rotate(720deg)',
                transition: 'all 0.5s',
                opacity: 0
            },
            visible: {
                transform: 'scale(1) rotate(0deg)',
                opacity: 1
            }
        }
    },
    fall: {
        overlay: {
            hidden: {
            },
            visible: {
            }
        },
        base: {
            hidden: {
            },
            visible: {
                filter: '',
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                transformStyle: 'preserve-3d',
                transform: 'translateZ(600px) rotateX(20deg)',
                opacity: 0
            },
            visible: {
                transition: 'all 0.3s ease-in',
                transform: 'translateZ(0px) rotateX(0deg)',
                opacity: 1
            }
        }
    },
    sideFall: { // effect 6
        overlay: {
            hidden: {
            },
            visible: {
            }
        },
        base: {
            hidden: {
            },
            visible: {
                filter: '',
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                transformStyle: 'preserve-3d',
                transform: 'translate(30%) translateZ(600px) rotate(10deg)',
                opacity: 0
            },
            visible: {
                transition: 'all 0.3s ease-in',
                transform: 'translate(0%) translateZ(0) rotate(0deg)',
                opacity: 1
            }
        }
    },
    slideAndStick: { // effect 7 slide and stick to top
        overlay: {
            hidden: {
            },
            visible: {
                top: 0,
                transform: 'translateX(-50%)'
            }
        },
        base: {
            hidden: {
            },
            visible: {
                filter: '',
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                transform: 'translateY(-200%)',
                transition: 'all .3s',
                opacity: 0
            },
            visible: {
                transform: 'translateY(0%)',
                borderRadius: '0 0 3px 3px',
                opacity: 1
            }
        }
    },
    '3dFlipHorizontal': { // effect 8 3D flip horizontal
        overlay: {
            hidden: {
            },
            visible: {
            }
        },
        base: {
            hidden: {
            },
            visible: {
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-70deg)',
                transition: 'all .3s',
                opacity: 0
            },
            visible: {
                transform: 'rotateY(0deg)',
                opacity: 1
            }
        }
    },
    '3dFlipVertical': { // effect 9 3D flip
        overlay: {
            hidden: {
            },
            visible: {
            }
        },
        base: {
            hidden: {
            },
            visible: {
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                transformStyle: 'preserve-3d',
                transform: 'rotateX(-70deg)',
                transition: 'all .3s',
                opacity: 0
            },
            visible: {
                transform: 'rotateX(0deg)',
                opacity: 1
            }
        }
    },
    '3dSign': { // effect 10 3D sign
        overlay: {
            hidden: {
            },
            visible: {
            }
        },
        base: {
            hidden: {
            },
            visible: {
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                transformStyle: 'preserve-3d',
                transform: 'rotateX(-60deg)',
                transformOrigin: '50% 0',
                transition: 'all .3s',
                opacity: 0
            },
            visible: {
                transform: 'rotateX(0deg)',
                opacity: 1
            }
        }
    },
    SuperScaled: { // effect 11
        overlay: {
            hidden: {
            },
            visible: {
            }
        },
        base: {
            hidden: {
            },
            visible: {
            }
        },
        dialog: {
            hidden: {
                transform: 'scale(2)',
                transition: 'all .3s',
                opacity: 0
            },
            visible: {
                transform: 'scale(2)',
                opacity: 1
            }
        }
    },
    JustMe: { // effect 12
        overlay: {
            hidden: {
            },
            visible: {
                background: '#e74c3c'
            }
        },
        base: {
            hidden: {
            },
            visible: {
            }
        },
        dialog: {
            hidden: {
                transform: 'scale(0.8)',
                transition: 'all .3s',
                opacity: 0,
                background: 'transparent'
            },
            visible: {
                transform: 'scale(1)',
                opacity: 1,
                background: 'transparent'
            }
        }
    },
    '3dSlit': {
        overlay: {
            hidden: {

            },
            visible: {

            }
        },
        base: {
            hidden: {
            },
            visible: {
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                'transform-style': 'preserve-3d',
                transform: 'translateZ(-3000px) rotateY(90deg)',
                opacity: 0,
                animation: ''
            },
            visible: {
                animation: keyframes.slit + ' .7s forwards ease-out',
            }
        }
    },
    '3dFromBottom': {
        overlay: {
            hidden: {

            },
            visible: {

            }
        },
        base: {
            hidden: {
            },
            visible: {
                filter: '',
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                'transform-style': 'preserve-3d',
                transform: 'translateY(100%) rotateX(90deg)',
                'transform-origin': '0 100%',
                opacity: 0,
                transition: 'all 0.3s ease-out'
            },
            visible: {
                'transform-style': 'preserve-3d',
                transform: 'translateY(0%) rotateX(0deg)',
                opacity: 1,
                transition: 'all 0.3s ease-out'
            }
        }
    },
    '3dFromLeft': {
        overlay: {
            hidden: {

            },
            visible: {

            }
        },
        base: {
            hidden: {
            },
            visible: {
                filter: '',
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                'transform-style': 'preserve-3d',
                transform: 'translateZ(100px) translateX(-30%) rotateY(90deg)',
                'transform-origin': '0 100%',
                opacity: 0,
                transition: 'all 0.3s'
            },
            visible: {
                transform: 'translateZ(0px) translateX(0%) rotateY(0deg)',
                opacity: 1,
                transition: 'all 0.3s'
            }
        }
    },
    blur: {
        overlay: {
            hidden: {
                opacity: 0,
                transition: 'all 0.3s'
            },
            visible: {
                opacity: 1,
                background: 'rgba(180,46,32,0.5)',
                transition: 'all 0.3s'
            }
        },
        base: {
            hidden: {
                filter: 'blur(3px)'
            },
            visible: {
                filter: ''
            }
        },
        dialog: {
            hidden: {
                transform: 'translateY(-5%)',
                opacity: 0
            },
            visible: {
                transform: 'translateY(0)',
                opacity: 1,
                transition: 'all 0.3s'
            }
        }
    }
};

module.exports = animations;
