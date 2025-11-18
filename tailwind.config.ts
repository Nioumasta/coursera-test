import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7C3AED',
          secondary: '#22D3EE',
          accent: '#F472B6',
          dark: '#0B0B20',
          light: '#F8FAFC'
        },
        success: '#10B981',
        warning: '#F97316',
        danger: '#EF4444'
      },
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        glow: '0 10px 50px rgba(124, 58, 237, 0.25)'
      },
      backgroundImage: {
        holographic: 'linear-gradient(120deg, rgba(124,58,237,0.12), rgba(34,211,238,0.12), rgba(244,114,182,0.12))'
      }
    }
  },
  plugins: []
};

export default config;
