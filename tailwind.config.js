/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                tertiary: 'var(--color-tertiary)',
            },
            fontFamily: {
                Roboto: ["'Roboto', sans-serif"],
                Montserrat: ["'Montserrat', sans-serif"]
            },
        },
        container: {
            padding: "2rem",
            center: true,
        }
    },
    plugins: []
}
