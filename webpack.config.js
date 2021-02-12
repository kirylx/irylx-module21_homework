const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        staticOptions: { index: "about.html" },
    },
    module: {
        rules: [
            { test: /\.svg$/, use: "svg-inline-loader" },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
    },
    plugins: [new CompressionPlugin()],
};
