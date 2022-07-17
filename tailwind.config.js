/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "neon-blue": "#07D0E6",
                "brand-purple": "#311847",
                "brand-purple-light": "#610F7F",
                "brand-pink-light": "#f9eaff",
                "brand-off-black": "#222429",
                "brand-blue": "#5299D3",
                "brand-orange": "#FF4E00",
                "brand-orange-light": "#ff7335",
                "brand-yellow": "#F7DF1E",
                "brand-grey": "#979797",
                "brand-off-white": "#F5f6f6",
                "brand-red": "#ec2227",
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                sansalt: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                "3xl": "1600px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
