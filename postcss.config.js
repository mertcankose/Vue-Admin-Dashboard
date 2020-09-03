module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--tl": "(max-width:600px)" },
        },
        {
          customMedia: { "--t": "(max-width:990px)" },
        },
        {
          customMedia: { "--d": "(max-width:1270px)" },
        },
      ],
    },
  },
};
