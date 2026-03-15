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

        /* Main brand color (Sky Blue) */
        primary: {
          DEFAULT: '#38BDF8',
          light: '#7DD3FC',
          lighter: '#E0F2FE',
        },

        /* Complementary color */
        secondary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          lighter: '#E0E7FF',
        },

        /* Background colors */
        bg: {
          primary: '#0F172A',
          secondary: '#1E293B',
          card: '#0F172A',
        },

        /* Borders */
        border: {
          DEFAULT: '#334155',
        },

        /* Accent colors */
        accent: {
          green: '#22C55E',
          blue: '#38BDF8',
        },

        /* Text colors */
        text: {
          primary: '#FFFFFF',
          muted: '#94A3B8',
        },

      },

      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
      },

      keyframes: {

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56,189,248,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(56,189,248,0.6)' },
        },

        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        countUp: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },

      },

    },
  },

  plugins: [],
};

export default config;
