module.exports = {
    'none': {
        'hidden': {},
        'visible': {}
    },
    'fadeAndScale': {
        'hidden': {
            dialog: {
                opacity: 0,
                transform: 'scale(0.7)',
                transition: 'all 0.3s'
            }
        },
        'visible': {
            dialog: {
                opacity: 1,
                transform: 'scale(1)'
            }
        }
    },
    'slideFromRight': {
        'hidden': {
            dialog: {
                transform: 'translateX(20%)',
                transition: 'all 0.3s',
                opacity: 0
            }
        },
        'visible': {
            dialog: {
                transform: 'translateX(0)',
                opacity: 1
            }
        }
    }
}
