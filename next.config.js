/**
* @next-sass.
* the stylesheet is compiled to .next/static/css.
* https://github.com/zeit/next-plugins/tree/master/packages/next-sass
*/

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withSass({

    /* config options here */
    publicConfig: {
        isDev: process.env.NODE_ENV === 'development',
        env: process.env.NODE_ENV,
    },

    // !TODO investigate:
    // https://whoisryosuke.com/blog/2018/nextjs-tip-using-media-in-css/
    webpack (config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        })

        return config
      }

}));