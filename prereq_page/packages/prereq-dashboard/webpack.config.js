const path = require('path');
const webpackMerge = require('webpack-merge');
const baseComponentConfig = require('@splunk/webpack-configs/component.config').default;

module.exports = webpackMerge(baseComponentConfig, {
    entry: {
        PrereqDashboard: path.join(__dirname, 'src/PrereqDashboard.jsx'),
    },
    output: {
        path: path.join(__dirname),
    },
});
