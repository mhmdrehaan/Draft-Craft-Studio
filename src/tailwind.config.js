module.exports = {
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'white' }
        },
        slideInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateY(-10px) rotate(180deg)'
          }
        }
      },
      animation: {
        'typing': 'typing 3s steps(15, end), blink-caret 0.75s step-end infinite',
        'slideInUp-1': 'slideInUp 1s ease-out 0.3s both',
        'slideInUp-2': 'slideInUp 1s ease-out 0.5s both', 
        'slideInUp-3': 'slideInUp 1s ease-out 0.6s both',
        'float': 'float 6s ease-in-out infinite'
      }
    }
  }
}