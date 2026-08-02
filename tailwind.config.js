/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 3s steps(25) infinite alternate',
        'blink': 'blink 0.8s infinite',
        'fadeIn': 'fadeIn 0.7s ease both',
        'fadeInSlow': 'fadeIn 1.2s ease both',
        'fadeSlideUp': 'fadeSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both',
        'underlineGrow': 'underlineGrow 0.8s ease 0.6s forwards',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '24ch' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        fadeSlideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        underlineGrow: {
          from: { width: '0' },
          to: { width: '60%' },
        },
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: ["./src/Home.jsx"],
  theme: {
    extend: {
      keyframes: {
        fadeSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        underlineGrow: {
          '0%': { width: '0' },
          '100%': { width: '60%' }
        },
        pulseBtn: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' }
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '24ch' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        },
        sheen: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        strUnderlineExpand: {
          '0%': { width: '0' },
          '100%': { width: '80px' }
        },
        strBorderRotate: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        strRingPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 0 6px rgba(201, 0, 0, 0)' }
        }
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both',
        'fade-in-fast': 'fadeIn 0.5s ease both',
        'fade-in-slow': 'fadeIn 1.2s ease both',
        'underline-grow': 'underlineGrow 0.8s ease 0.6s forwards',
        'typing': 'typing 3s steps(25) infinite alternate, blink 0.8s infinite',
        'sheen': 'sheen 1.2s ease forwards',
        'str-underline-expand': 'strUnderlineExpand 1s ease 0.3s both',
        'str-border-rotate': 'strBorderRotate 3s linear infinite',
        'str-ring-pulse': 'strRingPulse 1.5s ease infinite',
      }
    }
  }
}
