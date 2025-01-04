/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        globaltextcolor: "#121843",
        textgray: "#686868",
        textblack: "#303030",
        textblue: "#3786F1",
        textred: "#FF5151",
        textpink: "#EE61CF",
        dashblue: "#E8F0FB",
        dashred: "#FFEFE7",
        dashpink: "#FDEBF9",
        "blue-900": "#1B204A",
        "yellow-400": "#f9c74f",
      },
    },
  },
  plugins: [],
};
