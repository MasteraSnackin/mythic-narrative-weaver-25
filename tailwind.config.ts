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
          DEFAULT: "#007BFF", // Electric Blue
          foreground: "#F8F9FA", // Ivory White
        },
        secondary: {
          DEFAULT: "#32CD32", // Lime Green
          foreground: "#F8F9FA",
        },
        accent: {
          DEFAULT: "#FF6347", // Sunset Orange
          foreground: "#212529",
        },
        success: "#32CD32", // Lime Green
        background: "#F8F9FA", // Ivory White
        foreground: "#212529", // Midnight Black
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#212529",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#212529",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        destructive: {
          DEFAULT: "#FF0000",
          foreground: "#F8F9FA",
        },
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#007BFF",
        purple: {
          DEFAULT: "#8A2BE2", // Violet Purple
          50: "#F3E8FF",
          100: "#E9D5FF",
          200: "#D8B4FE",
          300: "#C084FC",
          400: "#A855F7",
          500: "#8A2BE2",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
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