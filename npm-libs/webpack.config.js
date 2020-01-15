module.exports = {
    entry: "./npm-to-cljs-library.js",

    mode: "production",

    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]}
};
