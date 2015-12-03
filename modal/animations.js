module.exports = {
    'none': {
        overlay: {
            hidden: {
        },
            visible: {

            }
        },
        container: {
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
        container: {
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
        container: {
            hidden: {
            },
            visible: {
            }
        },
        dialog: {
            hidden: {
                transform: 'translateX(20%)',
                transition: 'all 0.3s',
                opacity: 0
            },
            visible: {
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
        container: {
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
        container: {
            hidden: {
            },
            visible: {
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
        container: {
            hidden: {
            },
            visible: {
                perspective: '1300px'
            }
        },
        dialog: {
            hidden: {
                'transform-style': 'preserve-3d',
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
    '3dFromLeft': {
        overlay: {
            hidden: {

            },
            visible: {

            }
        },
        container: {
            hidden: {
            },
            visible: {
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
        container: {
            hidden: {
                filter: 'blur(3px)'
            },
            visible: {
                filter: 'blur(0px)'
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
}

/*

blur: {
    overlay: {
        hidden: {

        },
        visible: {

        }
    },
    container: {
        hidden: {

        },
        visible: {

        }
    },
    dialog: {
        hidden: {

        },
        visible: {

        }
    },

    */
