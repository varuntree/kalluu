import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			'text': '#09090a',
			'background': '#f5f5f9',
			'primary': '#0000a7',
			'secondary': '#1471cf',
			'accent': '#3924d1',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  fontSize: {
			sm: '0.750rem',
			base: '1rem',
			xl: '1.333rem',
			'2xl': '1.777rem',
			'3xl': '2.369rem',
			'4xl': '3.158rem',
			'5xl': '4.210rem',
		  },
		  fontFamily: {
			heading: 'Ponnala',
			body: 'Ponnala',
		  },
		  fontWeight: {
			normal: '400',
			bold: '700',
		  },
		  
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
