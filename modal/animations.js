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
    }
}
