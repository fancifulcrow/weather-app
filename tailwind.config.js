/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            Roboto: ["'Roboto', sans-serif"],
            Montserrat: ["'Montserrat', sans-serif"]
        },
        container: {
            padding: "2rem",
            center: true,
        }
    },
    plugins: []
}
