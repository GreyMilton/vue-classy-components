const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  codeSplit: false,
  copyCodeButton: true,
  simpleEditor: false,
  title: 'Vue Classy Components',
  styleguideDir: 'docs_styleguidist',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  },
  components: './src/components/**/*.vue',
};
