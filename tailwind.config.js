/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        'primary-lighter': '#f3fffe',
        'primary-light': '#c9e4e2',
        'primary-dark': '#334B4A',
        'primary-darker': '#223938',
        'accent-1': '#00C492',
        'accent-2': '#7FD1AE'
      },
      backgroundImage: {
        "theme-gradient": "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)"
      },
    },
  },
  plugins: [
    
  ]
};
