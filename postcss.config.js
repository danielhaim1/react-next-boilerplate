/**
* @next-sass
* https://github.com/zeit/next-plugins/tree/master/packages/next-sass
*/

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};