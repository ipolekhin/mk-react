const path = require(`path`);
const miniCss = require(`mini-css-extract-plugin`);

module.exports = {
  mode: `production`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    inline: true,
    open: true,
    port: 2020,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          miniCss.loader,
          `css-loader`,
          `sass-loader`,
        ],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
  ],
};
