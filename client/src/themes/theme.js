export default (mode) => ({
  type: mode.type,
  palette: {
    primary: {
      light: "#FFECB3",
      main: "#FFC107",
      dark: "#FFA000",
    },
    secondary: {
      light: "#BBDEFB",
      main: "#2196F3",
      dark: "#1976D2",
    },
    error: "#d32f2f",
    warning: "#ffa000",
    info: "#90caf9",
    success: "#43a047",
    divider: '#4d4d4d',
    grey: {
      0: "#0b0b0b",
      1: "#212121",
      2: "#373737",
      3: "#4d4d4d",
      4: "#636363",
      5: "#797979",
      6: "#a6a6a6",
      7: "#d2d2d2",
      8: "#e8e8e8",
      9: "#fafafa"
    },
    ...mode.palette,
  },
  background: {
    ...mode.background,
  },
  shadows: {
    0: 'none',
    2: '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
    4: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    8: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)'
  },
  layout: {
    header: {
      height: '6rem'
    }
  },
  typo: {
    h1: {
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1,
      letterSpacing: '-0.01562em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    },
    h2: {
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1,
      letterSpacing: '-0.00833em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    },
    h3: { 
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.04,
      letterSpacing: '0em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    },
    h4: { 
      fontWeight: 400,
      fontSize: '2.5rem',
      lineHeight: 1.17,
      letterSpacing: '0em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    },
    h5: { 
      fontWeight: 400,
      fontSize: '1.9rem',
      lineHeight: 1.33,
      letterSpacing: '0em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    },
    subtitle: {
      fontWeight: 400,
      fontSize: '1.2rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    },
    body: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    },
    button: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    },
    caption: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
      fontFamily: `"Lato", "Roboto", "Arial", sans-serif`
    }

  },
  buttons: {
    disabled: {
      text: "rgba(255, 255, 255, 0.26)",
      bg: "#d2d2d2",
    }
  },
  spacing: (multiplier) => (`${10 * multiplier}px`),
  mixins: {
    absCentered: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    defaultBorderRadius: {
      borderRadius: '5px',
    }
  },
  images: {
    random_xs: 'http://lorempixel.com/50/50/cats',
    random_sm: 'http://lorempixel.com/100/100/cats',
    random_md: 'http://lorempixel.com/200/100/cats',
    random_lg: 'http://lorempixel.com/400/200/cats',
    random_xl: 'http://lorempixel.com/640/480/cats',
    profile_md: '../static/images/profile_md.png', 
    placeholder_lg: '../static/images/placeholder-600x400.png'
  },
  media: {
    size: {
      mobileS: '320px',
      mobileM: '375px',
      mobileL: '425px',
      tablet: '768px',
      laptop: '1024px',
      laptopL: '1440px',
      desktop: '2560px'
    },
    device: {
      mobileS: `(min-width: 320px)`,
      mobileM: `(min-width: 375px)`,
      mobileL: `(min-width: 425px)`,
      tablet: `(min-width: 768px)`,
      laptop: `(min-width: 1024px)`,
      laptopL: `(min-width: 1440px)`,
      desktop: `(min-width: 2560px)`,
    }
  }
});