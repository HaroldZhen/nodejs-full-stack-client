module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "875px",
      }
    },
    extend: {
      fontFamily: {
        'paytone-one': ['Paytone One', 'sans-serif'],
        'noto-sans-tc': ['Noto Sans TC', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'baloo-da-2': ['Baloo Da 2', 'cursive'],
        'azeret-mono': ['Azeret Mono', 'monospace'],
        'helvetica-neue': ['Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        '2.5xl': '1.625rem',
      },
      minWidth: {
        '374': '374px'
      },
      borderWidth: {
        '3': '3px'
      },
      spacing: {
        '4.5': '1.25rem',
        '11.5': '2.875rem',
        '17.5': '4.375rem'
      },
      colors: {
        primary: '#03438d',
        secondary: '#E2EDFA',
        success: '#83C51D',
        positive: '#EEC32A',
        negative: '#F57375',
        dark: '#000400',
        accent: '#9B9893',
        'grey-1': '#D6D7D6',
        'grey-2': '#A8B0B9',
        'grey-3': '#9B9893',
        'grey-4': '#808080',
        info: '#EFECE7',
        'sweet-vanilla': '#EFECE7',
      },
      boxShadow: {
        'x1': '-2px 2px 0px #000400;',
        'x2': '0px 3px 0px #000400;',
        'mdx1': '-8px 8px 0px #C9C7C2;',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
}
