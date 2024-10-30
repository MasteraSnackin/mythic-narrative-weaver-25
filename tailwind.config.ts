import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3A86FF", // Electric Blue
          foreground: "#F5F5F5", // Soft White
        },
        secondary: {
          DEFAULT: "#8338EC", // Vibrant Purple
          foreground: "#F5F5F5",
        },
        accent: {
          DEFAULT: "#FFBE0B", // Golden Yellow
          foreground: "#2A2A2A",
        },
        success: "#3D9970", // Emerald Green
        background: "#F5F5F5", // Soft White
        foreground: "#2A2A2A", // Slate Gray
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2A2A2A",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#2A2A2A",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        destructive: {
          DEFAULT: "#FF0000",
          foreground: "#F5F5F5",
        },
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#3A86FF",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config