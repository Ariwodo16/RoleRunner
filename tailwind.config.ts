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

        /* Primary brand color */
        primary: {
          DEFAULT: "#38BDF8",   // sky blue
          light: "#7DD3FC",
          lighter: "#E0F2FE",
        },

        /* Complementary charcoal */
        charcoal: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },

        /* Background system */
        bg: {
          primary: "#0F172A",
          secondary: "#111827",
          card: "#1E293B",
        },

        /* Borders */
        border: {
          DEFAULT: "#334155",
        },

        /* Accent colors */
        accent: {
          green: "#22C55E",
          blue: "#38BDF8",
        },

        /* Text */
        text: {
          primary: "#FFFFFF",
          muted: "#94A3B8",
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
