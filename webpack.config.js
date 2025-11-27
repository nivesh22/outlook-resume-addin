const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        taskpane: "./src/taskpane/taskpane.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".html", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "taskpane.html",
            template: "./src/taskpane/taskpane.html",
            chunks: ["taskpane"],
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: [],
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "assets/*",
                    to: "assets/[name][ext]",
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        server: {
            type: "https",
            options: {
                key: undefined, // Webpack dev server will generate self-signed certs by default
                cert: undefined,
            },
        },
        port: 3000,
        hot: true,
    },
};
