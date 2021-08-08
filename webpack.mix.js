const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
/*
// Make Laravel Mix ignore .svgs
Mix.listen('configReady', function (config) {
    const rules = config.module.rules;
    const targetRegex = /(\.(png|jpe?g|gif)$|^((?!font).)*\.svg$)/;

    for (let rule of rules) {
        if (rule.test.toString() == targetRegex.toString()) {
            rule.exclude = /\.svg$/;
            break;
        }
    }
}); */

// Handle .svgs with html-loader instead
/* mix.webpackConfig(
    {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true,
                            },
                        },
                    ],
                },
            ],
        },
    },
); */
mix.js('resources/js/scripttag.js', 'html/js/app.js');
mix.copy('public/html/js/app.js', 'resources/views/scripttag.php');
/* mix.js('resources/js/app.js', 'public/js').vue()
    .css('resources/css/app.css', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js'),
        ],
    })
    .webpackConfig({
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    })
    .version()
    .sourceMaps(); */
