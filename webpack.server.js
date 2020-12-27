const path = require('path')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const common = require('./webpack.common')

module.exports = merge(common, {
    target: 'node',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'server'),
        filename: 'index.js'
    },
    externals: [nodeExternals()]
})