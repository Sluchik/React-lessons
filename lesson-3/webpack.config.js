var webpack = require('webpack');

module.exports = {

    entry: "./src/main.js",
    output:{
        path: 'public/build/',
        publicPath: "build/",
        filename: "bundel.js"
    }

}
