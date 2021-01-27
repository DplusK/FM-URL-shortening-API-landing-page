module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      width: {
        '25': '25px'
      },
      spacing: {
        "70": "70px",
        "100": "100px",
        "120": "120px"
      },
      minHeight: {
        '42': '42px',
      },
      height: {
        '25': '25px',
        '35': '35px',
        '42': '42px',
        "70": "70px",
        "80": "80px",
        '170': "170px",
        '250': "250px",
        '310': "310px",
        "650": "650px",
        "10/12": "83.333333%"
      },
      textColor: {
        "theme": "#2FCFD2",
      },
      outline: {
        red: ['2px solid #DC2626', '2px'],
      },
      backgroundColor: {
        "theme": "#2FCFD2",
        'bg': '#3A3053',
        'bg-light': '#F0F1F6',
        'dark': '#232027'
      },
      borderColor: theme => ({
        ...theme('colors'),
        'theme': '#2FCFD2',
      }),
      backgroundImage: theme => ({
        'url': "url('/images/bg-shorten-desktop.svg')",
        'url-m': "url('/images/bg-shorten-mobile.svg')",
        'boost': "url('/images/bg-boost-desktop.svg')",
        'boost-m': "url('/images/bg-boost-mobile.svg')",
        'facebook': "url('/images/icon-facebook.svg')",
        'facebook-hover': "url('/images/icon-facebook-hover.svg')",
        'twitter': "url('/images/icon-twitter.svg')",
        'twitter-hover': "url('/images/icon-twitter-hover.svg')",
        'pinterest': "url('/images/icon-pinterest.svg')",
        'pinterest-hover': "url('/images/icon-pinterest-hover.svg')",
        'instagram': "url('/images/icon-instagram.svg')",
        'instagram-hover': "url('/images/icon-instagram-hover.svg')",
      }),
      inset: {
        '40': '40px',
        '-2': '-2rem',
        '-3': '-3rem',
        '-10': '-10rem',
        '1/2': '50%',
        'circle': "calc(50% - 36px)"
      }
    },
  },
  variants: {
    backgroundColor: ['hover', 'group-hover'],
    backgroundImage: ['hover'],
  },
  plugins: [],
}
