/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#ffb6c1',
        'mint-green': '#98fb98',
        'light-blue': '#add8e6',
        'cream': '#f5f5dc',
        'soft-purple': '#dda0dd',
        'peach': '#ffcccb',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      }
    },
  },
  plugins: [],
};
