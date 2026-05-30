/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./api.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  // Preserve all classnames used at runtime (safelist).
  // Using a permissive pattern ensures NativeWind doesn't purge verbatim web classes.
  safelist: [
    {
      pattern: /.*/
    }
  ],
  plugins: []
};
