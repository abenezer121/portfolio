
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        caret: 'caret 1s steps(1) infinite',
      },
      keyframes: {
        caret: {
          '50%': { backgroundColor: 'transparent' },
        },
      },
      colors: {
        'ubuntu-bg': '#2c001e',
        'ubuntu-orange': '#ff6c00',
        'ubuntu-green': '#b1f2a7',
      },
    },
  },
  plugins: [],
}
