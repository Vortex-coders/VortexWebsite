/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#f1f1f1',
        full_black: '#0000',
        black: '#1c1c1c',
        light_black: '#2c2c2c',
        gray: '#c0c0c0',
        light_gray: '#f1f1f1c6',
        gold: '#ffc853',
        orange: '#ffa353'
      },
      keyframes: {
        blink: {
          '50%': {
            opacity: 0,
          },
        },
        dropdown_fade: {
          '0%': { opacity: 0, transform: 'translateY(-5px)' },
          '100%': { opacity: 100, transform: 'translateY(0)' },
        },
        logo_fade: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 100, transform: 'translateY(0)' },
        },
      },
      animation: {
        dropdown_fade: 'dropdown_fade .3s ease-in ',
        logo_fade: 'logo_fade 2s ease-out',
        blink: 'blink step-start infinite 1s',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
