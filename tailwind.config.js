module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1f2021",
        light_dark: "#353738",
        dark_gray: "#616161",
        lighter_yellow: "#f7c97e",
        light_yellow: "#f8c168",
        normal_yellow: "#e3b15f",
        regular_yellow: "#f0aa3a",
        dark_yellow: "#cc9c50",
        dark_blue: "#0a1256",
        instagram: "#e95950",
        telegram: "#229ED9",
        linkedin: "#0e76a8",
        github: "#171515",
      },
      screens: {
        "3xl": "1792px",
        xs: "350px",
      },
      brightness: {
        25: ".25",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
