const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()]
}