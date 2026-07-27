import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eth: {
          blue: "#3D89E8",
          "blue-dark": "#2F6FC4",
          "blue-soft": "#E8F2FC",
          purple: "#743B93",
          "purple-dark": "#5C2E75",
          "purple-soft": "#F1E8F6",
          spark: "#8EC5F5",
          ink: "#1C2328",
          "ink-soft": "#2E383F",
          mist: "#F4F8FB",
          slate: "#5A666C",
          stone: "#E8EEF0",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-josefin)", "system-ui", "sans-serif"],
        body: ["var(--font-pontano)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "eth-body": ["1.0625rem", { lineHeight: "1.75" }],
        "eth-large": ["1.25rem", { lineHeight: "1.65" }],
        "eth-small": ["0.9375rem", { lineHeight: "1.65" }],
        "eth-h1": [
          "clamp(2.35rem, calc((3.5 - 1) * 1.2vw + 1rem), 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "eth-h2": [
          "clamp(1.875rem, calc((2.65 - 1) * 1.2vw + 1rem), 2.65rem)",
          { lineHeight: "1.18", letterSpacing: "-0.015em" },
        ],
        "eth-h3": [
          "clamp(1.3rem, calc((1.65 - 1) * 1.2vw + 1rem), 1.65rem)",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
        "eth-h4": [
          "clamp(0.8125rem, calc((0.9375 - 1) * 1.2vw + 1rem), 0.9375rem)",
          { lineHeight: "1.4", letterSpacing: "0.12em" },
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "1.25rem",
        image: "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 16px -4px rgba(28, 35, 40, 0.08)",
        card: "0 8px 32px -10px rgba(28, 35, 40, 0.12)",
        lift: "0 20px 48px -16px rgba(28, 35, 40, 0.16)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "draw-line": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
        "draw-line": "draw-line 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
