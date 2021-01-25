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
        "100": "100px"
      },
      height: {
        '25': '25px',
        '35': '35px',
        "70": "70px",
        "80": "80px",
        '170': "170px",
        '250': "250px",
        '310': "310px",
        "650": "650px"
      },
      textColor: {
        "theme": "#2FCFD2",
      },
      backgroundColor: {
        "theme": "#2FCFD2",
        'bg': '#3A3053',
        'bg-light': '#F0F1F6',
        'dark': '#232027'
      },
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
        '-2': '-2rem',
        '-3': '-3rem',
        '1/2': '50%'
      }
    },
  },
  variants: {
    backgroundColor: ['hover', 'group-hover'],
    backgroundImage: ['hover'],
  },
  plugins: [],
}
