import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		maxWidth: {
  			base: '68.0625rem'
  		},
  		screens: {
  			xs: '26.875rem',
  			sm: '40rem',
  			md: '48rem',
  			lg: '64rem',
  			xl: '80rem',
  			'2xl': '90rem'
  		},
  		fontFamily: {
  			sansation: ['Sansation', 'sans-serif'],
  			inter: ['Inter', 'sans-serif']
  		},
  		colors: {
  			brand: {
  				dark: '#0B1736',
  				red: '#A4031F',
  				purple: '#240B36',
  				gray: {
  					'100': '#EFEFEF',
  					DEFAULT: '#F5F5F5'
  				}
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			'3': '0.1875rem',
  			'5': '0.3125rem',
  			'7': '0.4375rem',
  			'10': '0.625rem',
  			'20': '1.25rem',
  			'1.5': '0.0938rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			'140': '8.75rem',
  			'220': '13.75rem'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
