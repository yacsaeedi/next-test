/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   preflight: true,
  // },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        icon: '#33363F',
        blue:
        {
          primary: '#0D47A1',
          t:
          {
            1: '#BFDAFF',
            2: '#9FC7FF',
            3: '#207DFF'
          },
          s:
          {
            1: '#005DDF',
            2: '#0050BF',
            3: '#001B40',
            4: '#000D20'
          }
        },
        yellow:
        {
          primary: '#EDC531',
          t:
          {
            1: '#FCEEC1',
            2: '#FBE6A1',
            3: '#F6CD44',
            4: '#F5C525'
          },
          s:
          {
            1: '#D0A30A',
            2: '#B38C08',
            3: '#775D06',
            4: '#594604',
            5: '#3C2F03'
          }
        },
        gray:
        {
          backDrop: 'rgba(50,50,50,0.87)',
          dark:
          {
            1: '#C8C8C8',
            2: '#AFAFAF',
            3: '#969696',
            4: '#323232',
            5: '#191919',
            6: '#242a3a'
          },
          light:
          {
            1: '#F1F1F1',
            2: '#F8F8F8',
            3: '#CFCFCF'
          }
        },
        success: '#1EC85A',
        danger: '#F53F3F',
        white: '#ffff',
        orange: '#e16f40'
        },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
