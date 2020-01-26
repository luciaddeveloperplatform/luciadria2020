/*******************************************************************************************************************************
 Key points to remember when configuring webpack with LuciadRIA 2020
 (1) In your babel-loader make sure you exclude anything outside /src folder or your compilation time will grow (include /src/ )
 (2) Configure your license in a separate entry in the entry array and makes sure it placed before that your main script.
 (3) Disable your map creation in production mode or you will end with a huge file )
 ********************************************************************************************************************************/

const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const entries = glob.sync('./src/index.js?');
const mainEntry = entries.length > 0 ? entries[0] : './src/index.js';
console.log("********************************************");
console.log(" - Entry matches: " + entries.length);
console.log(" - Selected entry point is: " + mainEntry);
module.exports = (env, argv) => {
    const MODE = argv.mode || 'development';
    const DEVELOPMENT_MODE = (MODE === 'development');

    const webpackConfig = {
        devtool: DEVELOPMENT_MODE ? 'eval-source-map' : undefined,  /* (3) This line is important with LuciadRIA */
        devServer: {
            inline: true,
            port: 3000,
            open: true,
            overlay: {
                warnings: false,
                errors: true
            }
        },
        entry: ['babel-polyfill', './src/license/index.js', mainEntry],  /* (2) This line is important with LuciadRIA */
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.js',
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    include: /src/,               /* (1) This line is important with LuciadRIA */
                    loader: ['babel-loader','eslint-loader']

                },
                {
                    test: /\.(css|scss|sass)$/,
                    loader: [
                        DEVELOPMENT_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg)$/,
                    use: ['file-loader'],
                },
            ]
        },
        plugins: [
            ...(!DEVELOPMENT_MODE ? [new MiniCssExtractPlugin({filename: "index.css"})] : []),
            new CopyWebpackPlugin([
                {
                    from: 'public',
                    ignore: ['index.html']
                }
            ]),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
        ]
    };

    if (DEVELOPMENT_MODE) {
        console.log(" - Webpack server starting in development mode!");
    } else {
        console.log(" - Webpack in production mode! This may take several minutes, be patient.");
    }
    console.log("********************************************");

    return webpackConfig;
}

