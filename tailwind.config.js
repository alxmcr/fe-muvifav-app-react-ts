/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: {
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        golden: {
          50: "#fffaeb",
          100: "#fff1c6",
          200: "#ffe184",
          300: "#ffcd4a",
          400: "#ffb720",
          500: "#f99407",
          600: "#dd6d02",
          700: "#b74b06",
          800: "#94390c",
          900: "#7a2f0d",
          950: "#461702",
        },
        cerise: {
          50: "#fef1f7",
          100: "#fee5f0",
          200: "#fecce3",
          300: "#ffa2cb",
          400: "#fe68a7",
          500: "#f83c86",
          600: "#e91f64",
          700: "#ca0c47",
          800: "#a70d3b",
          900: "#8b1034",
          950: "#55021a",
        },
        perano: {
          50: '#eef3ff',
          100: '#dfe9ff',
          200: '#bed0ff',
          300: '#a3bafe',
          400: '#7f93fa',
          500: '#606ff4',
          600: '#4347e8',
          700: '#3535cd',
          800: '#2e30a5',
          900: '#2c2f83',
          950: '#1a1b4c',
        },
      },
      fontFamily: {
        display: ["Coustard", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        merriweather: ['Merriweather', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
