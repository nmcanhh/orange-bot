const CracolessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracolessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { 'primary-color': '#FA8C16' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};