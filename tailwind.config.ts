import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
    screens: {
      'xs': '400px',   
      'xsmax':{max: '400px'},   
      'sm': '480px',
      'smmax':{max: '4800px'},
      'sml': '576px',
      'smlmax':{max: '576px'},
      'md': '768px',
      'mdmax':{max: '768px'},
      'lg': '992px',
      'lgmax':{max: '992px'},
      'xl': '1024px',
      'xlmax':{max: '1024px'},   
      'w1200': '1200px',
      'w1200max':{max: '1200px'},   
      'w1366': '1366px',
      'w1366max':{max: '1366px'},   
      'w1400': '1400px',
      'w1400max':{max: '1400px'},   
      'w1500': '1500px',
      'w1500max':{max: '1500px'},   
      'w1600max':{max: '1600px'},   
      'w1700max':{max: '1700px'},
      
    },
  },
  plugins: [],
} satisfies Config;
