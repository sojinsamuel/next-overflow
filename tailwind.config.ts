import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2.1rem",
      screens: {
        "2xl": "1395px",
      },
    },
    extend: {
      colors: {
        primary: {
          501: "#FF7101",
          100: "#FFF2E7",
        },
        dark: {
          101: "#010101",
          201: "#0F1218",
          301: "#161922",
          401: "#212835",
          501: "#111013",
        },
        light: {
          901: "#FEFEFE",
          801: "#F5F7F9",
          851: "#FEFEFE",
          701: "#DDE4F2",
          501: "#7C8FC9",
          401: "#8690AE",
        },
        "accent-cyan": "#1DA2F3",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        Space_Mono: ["var(--font-Space_Mono)"],
      },
      boxShadow: {
        "soft-100":
          "0px 13px 21px 1px rgba(185, 185, 185, 0.03), 0px 7px 13px 1px rgba(185, 185, 185, 0.02), 0px 3px 5px 1px rgba(185, 185, 185, 0.03)",
        "soft-200": "11px 11px 21px 1px rgba(219, 214, 214, 0.11)",
        "soft-300": "-11px 11px 21px 1px rgba(219, 214, 214, 0.11)",
        "dark-100": "1px 3px 11px 1px rgba(47, 53, 57, 0.11)",
        "dark-200": "3px 1px 21px 1px rgba(40, 37, 37, 0.05)",
      },
      backgroundImage: {
        "auth-dark": "url('/assets/images/auth-dark.png')",
        "auth-light": "url('/assets/images/auth-light.png')",
      },
      screens: {
        xs: "425px",
      },
      keyframes: {
        "slide-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "slide-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.25s ease-out",
        "slide-up": "slide-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
