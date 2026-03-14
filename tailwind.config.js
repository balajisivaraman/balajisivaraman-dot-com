module.exports = {
  darkMode: 'class',
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Alegreya', 'serif'],
        body: ['"IBM Plex Serif"', 'Georgia', 'serif'],
      },
      fontSize: {
        // Perfect Fourth scale (×1.333) anchored at 18px
        'reading': ['1.125rem', { lineHeight: '1.75' }],
        'h3':      ['1.5rem',   { lineHeight: '1.3'  }],
        'h2':      ['2rem',     { lineHeight: '1.25' }],
        'h1':      ['3.5rem',   { lineHeight: '1.1'  }],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body':                    theme('colors.gray[800]'),
            '--tw-prose-headings':                theme('colors.gray[900]'),
            '--tw-prose-links':                   '#b45309',
            '--tw-prose-bold':                    theme('colors.gray[900]'),
            '--tw-prose-code':                    theme('colors.gray[900]'),
            '--tw-prose-quotes':                  theme('colors.gray[700]'),
            '--tw-prose-quote-borders':           theme('colors.gray[300]'),
            '--tw-prose-invert-body':             theme('colors.gray[200]'),
            '--tw-prose-invert-headings':         theme('colors.gray[100]'),
            '--tw-prose-invert-links':            '#fbbf24',
            '--tw-prose-invert-bold':             theme('colors.gray[100]'),
            '--tw-prose-invert-code':             theme('colors.gray[100]'),
            '--tw-prose-invert-quotes':           theme('colors.gray[300]'),
            '--tw-prose-invert-quote-borders':    theme('colors.gray[600]'),
            fontFamily: '"IBM Plex Serif", Georgia, serif',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            'h1,h2,h3,h4': { fontFamily: '"Alegreya", serif' },
            'h2': { fontSize: '2rem',     fontWeight: '700', lineHeight: '1.25', marginTop: '2rem',    marginBottom: '0.75rem' },
            'h3': { fontSize: '1.333rem', fontWeight: '400', lineHeight: '1.3',  marginTop: '1.75rem', marginBottom: '0.5rem'  },
            'h4': { fontSize: '1.125rem', lineHeight: '1.5',  marginTop: '1.5rem',  marginBottom: '0.5rem'  },
            'img': { marginLeft: 'auto', marginRight: 'auto' },
            'nav.toc > ol': { listStyleType: 'decimal', paddingLeft: '1.25rem' },
            'nav.toc > ol ol': { listStyleType: 'lower-alpha', paddingLeft: '1.25rem' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
