const path = require( 'path' );
const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' );

module.exports = {

    // generate source maps
    devtool: 'source-map',

    // bundling mode
    mode: 'production',

    // entry files
    entry: './src/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },

    // plugins
    plugins: [
        new ForkTsCheckerWebpackPlugin(), // run TSC on a separate thread
    ],

    // set watch mode to `true`
    watch: true
};
