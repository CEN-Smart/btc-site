/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./layouts/*.html"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: "#0d0d2b;",
			secondary: "#3671e9",
			darkBlue: "#1d4ed8",
			tertiary: "#2B076E",
			white: "#e9e9fd",
			pureWhite: "#ffffff",
			lightGreyWhite: "#d1d5db",
			darkWhite: "#fbfcfe",
			greyWhite: "#828282",
			lightPurple: "#654cb2",
			lightBlue: "#4986c0",
			grey: "#171734",
			lightGrey: "#252540",
		},
		extend: {
			width: {
				128: "32rem",
				240: "60rem",
				260: "65rem",
				280: "70rem",
				300: "75rem",
				320: "80rem",
				340: "85rem",
				360: "90rem",
				380: "95rem",
			},
			backgroundImage: {
				hero: "url('./images/bg.jpg')",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
