const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1280px',
                '2xl': '1920px',
            },
            colors: {
                theme: {
                    transparent: 'transparent',
                    white: '#FFFFFF',
                    anthrazit: '#1A1A1A',
                    kraftpapier: '#D7BE9D',
                    petrol: '#006D7E',
                    rosa: '#EDD1C9',
                    orange: '#D77C12',
                    'medium-gray': '#737373',
                    'hover-gray': '#3A3734',
                    'light-gray': '#E9E9E9',
                },
            },
            gridTemplateColumns: {
                '2-col-155px': 'repeat(2,155px)',
                '4-col-155px': 'repeat(4,155px)',
                '8-col-155px': 'repeat(8,155px)',
            },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
