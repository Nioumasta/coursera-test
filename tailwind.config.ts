import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#22D3EE',
        accent: '#FB7185',
        midnight: '#0B1021',
        frost: '#E0F2FE',
      },
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        holographic: 'linear-gradient(120deg, rgba(34,211,238,0.12), rgba(124,58,237,0.12), rgba(251,113,133,0.12))',
      },
    },
  },
  plugins: [],
};

export default config;
