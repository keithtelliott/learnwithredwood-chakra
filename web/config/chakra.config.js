// This object will be used to override Chakra-UI theme defaults.
// See https://chakra-ui.com/docs/styled-system/theming/theme for theming options
// module.exports = {
// }
module.exports = {
  colors: {
    brand: {
      100: 'orange',
      // ...
      900: '#1a202c',
    },
    almostBlack: '#242424',
    lemonLime: '#E6FF00' /* safety green */,
    onyx: '##111111' /* almost black */,
    nero: '#252525' /* dark gray */,
    dolphin: '#7e7f9a' /* purple gray */,
    turquoise: '#40ebd4' /* turquoise */,
    oriolesOrange: '#fe4e1c',
    sunsetOrange: '#ff6054' /* coral */,
    chartreuse: '#80ff01' /* green */,
    tamarillo: '#911412' /* deep red */,
    eerieBlack: '#1e1e1e' /* almost black */,
    jet: '#353535' /* lighter - almost black rollover */,
    montana: '#3A3A3A',
  },
  fonts: {
    modern: `'Abril Fatface', cursive`,
    sansSerif: `'Inter', sans-serif`,
  },
  maxWidth: {
    pageWidth: '1280px',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        // bg: 'gray.400',
        // color: 'orange',
      },
      // styles for the `a`
      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'underline',
      //   },
      // },
    },
  },
  components: {
    Button: {
      variants: {
        isToggled: {
          background: 'turquoise',
          border: '3px solid',
          borderColor: 'turquoise',
          color: 'black',
        },
        isNotToggled: {
          border: '3px solid',
          borderColor: 'dolphin',
          color: 'dolphin',
        },
      },
    },
  },
}
