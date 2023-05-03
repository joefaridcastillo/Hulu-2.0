/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{html,jsx,js}',
    './components/**/*.{html,jsx,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  images: [
    "image.tmbd.org",

]
}
