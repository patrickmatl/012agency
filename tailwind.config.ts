import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['var(--font-syne)', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        gold: {
          css: {
            '--tw-prose-body': '#e5e5e5',
            '--tw-prose-headings': '#FFD700',
            '--tw-prose-lead': '#fca311',
            '--tw-prose-links': '#FFD700',
            '--tw-prose-bold': '#FFD700',
            '--tw-prose-counters': '#FFD700',
            '--tw-prose-bullets': '#FFD700',
            '--tw-prose-hr': '#333333',
            '--tw-prose-quotes': '#FFD700',
            '--tw-prose-quote-borders': '#FFD700',
            '--tw-prose-captions': '#a3a3a3',
            '--tw-prose-code': '#FFD700',
            '--tw-prose-pre-code': '#e5e5e5',
            '--tw-prose-pre-bg': '#171717',
            '--tw-prose-th-borders': '#333333',
            '--tw-prose-td-borders': '#333333',
            '--tw-prose-invert-body': '#e5e5e5',
            '--tw-prose-invert-headings': '#FFD700',
            '--tw-prose-invert-lead': '#fca311',
            '--tw-prose-invert-links': '#FFD700',
            '--tw-prose-invert-bold': '#FFD700',
            '--tw-prose-invert-counters': '#FFD700',
            '--tw-prose-invert-bullets': '#FFD700',
            '--tw-prose-invert-hr': '#333333',
            '--tw-prose-invert-quotes': '#FFD700',
            '--tw-prose-invert-quote-borders': '#FFD700',
            '--tw-prose-invert-captions': '#a3a3a3',
            '--tw-prose-invert-code': '#FFD700',
            '--tw-prose-invert-pre-code': '#e5e5e5',
            '--tw-prose-invert-pre-bg': '#171717',
            '--tw-prose-invert-th-borders': '#333333',
            '--tw-prose-invert-td-borders': '#333333',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              lineHeight: '1.8',
              fontSize: '1.1rem',
            },
            h2: {
              marginTop: '2em',
              marginBottom: '1em',
              color: '#FFD700',
            },
            h3: {
              marginTop: '1.5em',
              marginBottom: '0.75em',
              color: '#FFD700',
            },
            a: {
              color: '#FFD700',
              textDecoration: 'none',
              '&:hover': {
                color: '#FFA500',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: '#FFD700',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
