/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            JosefinSlab: ["'Josefin Slab', serif"],
            JosefinSans: ["'Josefin Sans', sans-serif"]
        },
        container: {
            padding: "2rem",
            center: true,
        }
    },
    plugins: []
}
