module.exports = {
    // Adds tree-shaking for unused Tailwind CSS
    // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    purge: ['public/**/*.{js}'],
    purge: false,
    darkMode: 'class',
    separator: '-',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
