import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',   
        'sm': '0.875rem',  
        'base': '1rem',    
        'lg': '1.125rem',  
        'xl': '1.25rem',   
        '2xl': '1.5rem',   
        '3xl': '1.875rem', 
        '4xl': '2.25rem',  
        '5xl': '3rem',     
        '6xl': '4rem',    
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      screens: {
        'sm': '640px',        
        'md': '768px',        
        'lg': '1024px',        
        'xl': '1280px',       
        '2xl': '1536px',      
      },
    },
  },
  plugins: [],
};

export default config;
