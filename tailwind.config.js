/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,php,js}",
    "./**/*.{html,php,js}",        // subfolder (components, partials)
    // kalau pakai Blade/Laravel:
    // "./resources/views/**/*.blade.php",
    // kalau pakai React/Vue:
    // "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '16px' },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0F172a',
      },
      screens: { '2xl': '1320px' },
    },
  },
  plugins: [],
};
