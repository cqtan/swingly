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
    ...mode.palette,

  },
  background: {
    ...mode.background,
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  shadows: {
    0: 'none',
    2: '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
    4: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    8: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)'


  }

});