import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdf8f3',
          100: '#faf0e4',
          200: '#f4ddc3',
          300: '#ecc89d',
          400: '#e3ad70',
          500: '#d89450',
          600: '#c97d3e',
          700: '#a76335',
          800: '#865030',
          900: '#6d4229',
        },
        sunset: {
          50: '#fff5ed',
          100: '#ffe8d5',
          200: '#fedaaa',
          300: '#fdbf73',
          400: '#fb9a3a',
          500: '#f97316',
          600: '#ea570c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      animation: {
        'dust-trail': 'dustTrail 2s ease-out infinite',
        'speed-line': 'speedLine 1s ease-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        dustTrail: {
          '0%': { opacity: '0.8', transform: 'translateX(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateX(-100px) scale(0.3)' },
        },
        speedLine: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(-200px)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
