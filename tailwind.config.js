/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        marquee: 'marqueeFrames 16s linear infinite',
        marquee2: 'marqueeFrames2 16s linear infinite',
        slideUp: 'slideUpFrames 0.2s ease-in-out'
      },
      keyframes: {
        marqueeFrames: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeFrames2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideUpFrames: {
          '0%': { transform: 'translateY(60%)', opacity: '20%' },
          '100%': { transform: 'translateY(20%)', opacity: '100%' },
        }
      }
    },
  },
  plugins: [],
};
