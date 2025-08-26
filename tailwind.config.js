/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Forest tones
        'forest-dark': '#1a2f1a',
        'forest-medium': '#2d4a2d',
        
        // Nature greens
        'nature-dark': '#1e3a1e',
        'nature-medium': '#4a7c59',
        'nature-bright': '#66cc7a',
        'nature-light': '#e8f5e8',
        
        // Accent orange
        'accent-orange': '#e35d04',
      },
      fontFamily: {
        'pixel': ['Orbitron', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'pixel-pulse': 'pixelPulse 4s ease-in-out infinite',
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(227, 93, 4, 0.5)',
        'pixel-hover': '6px 6px 0px 0px rgba(227, 93, 4, 0.7)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};