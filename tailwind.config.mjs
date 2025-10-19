/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Cogesto brand colors
				'sick-blue': '#055bf8',
				'sick-navy': '#091138',
				'sick-light': '#f2f5f4',
				'sick-gray': '#5d5a59',
				// SICK-inspired neutral scale
				'neutral-0': '#ffffff',
				'neutral-50': '#fafafa',
				'neutral-100': '#f5f5f5',
				'neutral-200': '#e5e5e5',
				'neutral-300': '#d4d4d4',
				'neutral-400': '#a3a3a3',
				'neutral-500': '#737373',
				'neutral-600': '#525252',
				'neutral-700': '#404040',
				'neutral-800': '#262626',
				'neutral-900': '#171717',
				'neutral-950': '#0a0a0a',
			},
			fontFamily: {
				// Keep Cogesto Intl as primary, but add Open Sans for fallback
				sans: ['Cogesto Intl', 'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
			},
      fontSize: {
        // SICK Synergy design system font sizes + larger sizes for breathing design
        'xs': '12px',
        'sm': '14px', 
        'base': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '64px',
        '6xl': '80px',
        '7xl': '96px',
        '8xl': '128px',
        '9xl': '160px',
      },
			spacing: {
				// SICK Synergy spacing scale + generous spacing for breathing design
				'1': '1px',
				'2': '2px',
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'36': '9rem',
				'40': '10rem',
				'44': '11rem',
				'48': '12rem',
			},
			boxShadow: {
				// SICK Synergy shadow system - using actual rgba(49, 55, 58) values
				'sick-sm': '0 1px 2px 0 rgba(49, 55, 58, .08)',
				'sick-medium': '0 1px 2px 0 rgba(49, 55, 58, .08), 0 1px 4px 0 rgba(49, 55, 58, .08), 0 2px 8px 0 rgba(49, 55, 58, .08)',
				'sick-large': '0 0 3px 0 rgba(49, 55, 58, .12), 0 2px 6px 0 rgba(49, 55, 58, .12), 0 3px 8px 0 rgba(49, 55, 58, .16)',
				'sick-xl': '0 1px 4px 0 rgba(49, 55, 58, .12), 0 8px 24px 0 rgba(49, 55, 58, .12), 0 16px 48px 0 rgba(49, 55, 58, .16)',
				'sick-down': '0 1px 4px 0 rgba(49, 55, 58, .12), 0 3px 8px 0 rgba(49, 55, 58, .12), 0 4px 12px 0 rgba(49, 55, 58, .16)',
			},
			transitionDuration: {
				// SICK Synergy transition durations
				'90': '90ms',
				'150': '150ms', 
				'250': '250ms',
				'350': '350ms',
				'500': '500ms',
			},
			transitionTimingFunction: {
				'ease-out': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
			},
			borderRadius: {
				// SICK Synergy border radius system
				'none': '0px',
				'sm': '4px',
				'DEFAULT': '4px',
				'md': '8px',
				'lg': '12px',
				'xl': '16px',
				'2xl': '24px',
				'pill': '9999px',
			},
			lineHeight: {
				// SICK Synergy line heights
				'denser': '1',
				'dense': '1.2',
				'normal': '1.4',
				'loose': '1.8',
				'looser': '2.2',
			},
			fontWeight: {
				'normal': '400',
				'semibold': '600',
				'bold': '700',
			},
		},
	},
	plugins: [],
}
