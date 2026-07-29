import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base dark palette — deep slate/navy, not pure black
        base: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#111827",
          700: "#1b2333",
          600: "#293347",
        },
        // Accent — electric blue -> cyan, used sparingly
        accent: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          glow: "#22d3ee",
        },
        ink: {
          100: "#f1f5f9",
          300: "#cbd5e1",
          500: "#8291ab",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,7,13,0) 0%, #05070d 90%), linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(600px circle at var(--x,50%) var(--y,20%), rgba(59,130,246,0.15), transparent 70%)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
