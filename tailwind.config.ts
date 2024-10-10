/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        bangers: ["var(--font-bangers)"],
        balooTamma: ["var(--font-baloo-tamma)"],
        balooThambi: ["var(--font-baloo-thambi-2)"],
      },
    },
  },
  plugins: [],
};
