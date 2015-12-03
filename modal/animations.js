module.exports = {
    'none': {
        'hidden': {},
        'visible': {}
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
    blur: {
        overlay: {
            hidden: {
            },
            visible: {
                background: 'rgba(180,46,32,0.5)'
            }
        },
        container: {
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
