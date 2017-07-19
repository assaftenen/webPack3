var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    entry: {
        app: './src/index.js',
         print: './src/print.js'
    },
    plugins:[
        // cleanning dist folder
        new CleanWebpackPlugin(['dist']),

        // for html file at the dist folder - so we not need to update the head script 
            new HtmlWebpackPlugin({
                title: 'Output Management'
            })
        ],
    output: {
        filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
    
};