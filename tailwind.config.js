// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          nunito: ['"Nunito"', 'sans-serif'],
        },
        colors: {
            logo: '#1E3F20', 
            background: '#4A7856',
        }
      },
    },
    plugins: [],
  };
  