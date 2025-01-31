/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: '#EEEEEE',
          accent: '#00ADB5',
          secondary: '#393e46',
          dark: '#222831',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
