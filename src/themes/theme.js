export default (mode) => ({
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
});