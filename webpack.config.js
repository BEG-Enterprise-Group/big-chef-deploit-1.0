  
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    optimization: {
        splitChunks: {
            // chunks:'async',
            maxInitialRequests: Infinity,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    // cacheGroupKey here is `commons` as the key of the cacheGroup
                    name(module, chunks, cacheGroupKey) {
                      const moduleFileName = module.identifier().split('/').reduceRight(item => item);
                      const allChunksNames = chunks.map((item) => item.name).join('~');
                      return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
                    },
                    chunks: 'all'
                  }
              
            },
        },
    },

    mode: 'production',

    entry: ['@babel/polyfill','./frontend/app.js'],
    output: {
        path: path.join(__dirname,'backend/public'),
        filename: 'js/[name].[chunkHash].bundle.js',
        chunkFilename: 'js/[name].[chunkHash]'.js
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
                
                
            },
            {
                test: /\.(sa|c|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader',options:{sourceMap:true}},
                    {
                        loader: 'postcss-loader',
                        options:{
                                    ident: 'postcss',
                                    plugins: [
                                        require('autoprefixer'),
                                        require('postcss-normalize'),
                                        require('postcss-preset-env')
                                    ],
                                    sourceMap:true
                                }
                    },
                    {loader: 'resolve-url-loader',options:{sourceMap:true}},
                    {loader: 'sass-loader',options:{sourceMap:true}},
                ]

            },
            {
                test: /\.handlebars/,
                loader: 'handlebars-loader',
                options:{
                    esModule: true,
                }
            },
            { /* for ~slick-carousel/slick/slick-theme.scss */
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 30000,
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            useRelativePath: true,
                            fallback: require.resolve('file-loader'),
                        }
                    }
                ]
                
            },
            {
                // test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|jpe?g)$/i,
                test: /\.(gif|png|jpe?g|svg)$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath: 'img/',
                            useRelativePath: true
                        }
                    },
                ]
            },
        ]
    },


    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new HtmlWebpackPlugin({
            template: './frontend/html/index.handlebars',
            minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            // chunks: ['commons','app'],
        }),

        new MiniCssExtractPlugin({
            filename: 'css/bundle.[chunkHash].css'
        })

    ] 
};

module.exports = config;