/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/views/index.blade.php", "./resources/js/React/**/*.jsx",
  "./node_modules/flowbite/**/*.js", './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

