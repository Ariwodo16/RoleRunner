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
        primary: {
          DEFAULT: "#38BDF8",
          light: "#7DD3FC",
          lighter: "#E0F2FE",
        },
        secondary: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
          lighter: "#E0E7FF",
        },
        bg: {
          primary: "#0F172A",
          secondary: "#111827",
          card: "#1E293B",
        },
        border: {
          DEFAULT: "#334155",
        },
        accent: {
          green: "#22C55E",
          blue: "#38BDF8",
        },
        text: {
          primary: "#FFFFFF",
          muted: "#94A3B8",
        },
        sky: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        indigo: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      animation: {
        "dust-trail": "dustTrail 2s ease-out infinite",
        "speed-line": "speedLine 1s ease-out infinite",
        float: "float 3s ease-in-out infinite",
        "slide-in": "slideIn 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        dustTrail: {
          "0%": { opacity: "0.8", transform: "translateX(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateX(-100px) scale(0.3)" },
        },
        speedLine: {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(-200px)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(56,189,248,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(56,189,248,0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
