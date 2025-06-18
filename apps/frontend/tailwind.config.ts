import type { Config } from "tailwindcss";

const borderColor = {
  low: "var(--border-low)",
  DEFAULT: "var(--border-low)",
  mid: "var(--border-mid)",
  strong: "var(--border-strong)",
  active: "var(--border-active)",
  warning: "var(--border-warning)",
  danger: "var(--border-danger)",
  info: "var(--border-info)",
};

const textColor = {
  primary: "var(--fg-primary)",
  secondary: "var(--fg-secondary)",
  tertiary: "var(--fg-tertiary)",
  accent: "var(--fg-accent)",
  danger: "var(--fg-danger)",
  warning: "var(--fg-warning)",
  success: "var(--fg-success)",
  info: "var(--fg-info)",
};

const backgroundColor = {
  primary: {
    DEFAULT: "var(--bg-primary)",
    hover: "var(--bg-primary-hover)",
    active: "var(--bg-primary-active)",
  },
  secondary: {
    DEFAULT: "var(--bg-secondary)",
    hover: "var(--bg-secondary-hover)",
    active: "var(--bg-secondary-active)",
  },
  tertiary: {
    DEFAULT: "var(--bg-tertiary)",
    hover: "var(--bg-tertiary-hover)",
    active: "var(--bg-tertiary-active)",
  },
  subtle: {
    DEFAULT: "var(--bg-subtle)",
    hover: "var(--bg-subtle-hover)",
    active: "var(--bg-subtle-active)",
  },
  "accent-a": {
    DEFAULT: "var(--bg-accent-a)",
    hover: "var(--bg-accent-a-hover)",
    active: "var(--bg-accent-a-active)",
    highlighted: "var(--bg-accent-a-highlighted)",
  },
  "accent-b": {
    DEFAULT: "var(--bg-accent-b)",
  },
  "accent-c": {
    DEFAULT: "var(--bg-accent-c)",
  },
  "accent-d": {
    DEFAULT: "var(--bg-accent-d)",
  },
  danger: {
    DEFAULT: "var(--bg-danger)",
  },
  warning: {
    DEFAULT: "var(--bg-warning)",
  },
  info: {
    DEFAULT: "var(--bg-info)",
  },
  success: {
    DEFAULT: "var(--bg-success)",
  },
  level: {
    0: "var(--level-0)",
    1: "var(--level-1)",
    "1a": "var(--level-1a)",
    "1-glass": "var(--level-1-glass)",
    2: "var(--level-2)",
    3: "var(--level-3)",
  },
};

const tailwindConfig = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
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
        bg: backgroundColor,
        border: borderColor,
        text: textColor,
        "progress-bar": {
          from: "#FCFF79",
          to: "#F6D159",
        },
      },
      backgroundColor,

      textColor,
      fill: textColor,
      borderColor,
      outlineColor: borderColor,
      stroke: borderColor,
      ringColor: {
        focus: "var(--border-focus)",
        "focus-danger": "var(--border-focus-danger)",
        ...borderColor,
      },
      boxShadow: {
        light: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
        mid: [
          "0px 2px 4px rgba(0, 0, 0, 0.08)",
          "0px 2px 12px rgba(0, 0, 0, 0.06)",
        ].join(","),
        strong: [
          "0px 16px 32px rgba(0, 0, 0, 0.08)",
          "0px 8px 16px rgba(0, 0, 0, 0.08)",
          "0px 4px 8px rgba(0, 0, 0, 0.08)",
          "0px 2px 4px rgba(0, 0, 0, 0.08)",
        ].join(","),
        "button-primary": [
          "0px 0px 0px 1px rgba(210, 228, 1, 0.76)",
          "0px 1px 2px 0px rgba(62, 62, 58, 0.4)",
        ].join(","),
        "button-secondary": [
          "0px 0px 0px 1px rgba(81, 80, 75, 0.08)",
          "0px 1px 2px 0px rgba(81, 77, 42, 0.12)",
        ].join(","),
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
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },

        "slide-in": {
          "0%": { opacity: "1", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(100%)" },
        },
      },

      aria: {
        invalid: 'invalid="true"',
        expanded: 'expanded="true"',
        "current-page": 'current="page"',
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "var(--font-inter, Inter)",
        ],
      },
    },
  },
} satisfies Config;

export default tailwindConfig;
