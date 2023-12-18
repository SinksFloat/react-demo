import {configure, UserSettings, WebpackBuildSettings} from '@reskript/settings';
const lessVariables = require('./config/lessVariable');
import {finalizeBabel, finalizeBuild} from './config/webpack.config.base';
let publicPath = '';
if (process.env.NODE_ENV === 'development') {
    if (process.env.TEST === 'true') {
        publicPath = '/operate-reach/static/';
    } else {
        publicPath = './';
    }
} else {
    publicPath = 'https://mstatic.cdn.bcebos.com/operate-reach/static/';
}

const build: WebpackBuildSettings = {
    appTitle: '平台',
    publicPath,
    style: {
        extract: false,
        resources: [],
        lessVariables,
        modules: (resource: string) => {
            return !/\/node_modules\/.+/.test(resource);
        },
    },
    finalize: finalizeBuild,
    reportLintErrors: true,
    uses: ['antd@4', 'lodash'],
    thirdParty: false,
    largeAssetSize: 1024 * 15,
    excludeFeatures: ['dev'],

    // @ts-ignore
    script: {
        finalize: finalizeBabel
    },
};

const devServer = {
    port: +(process.env.MAIN_PORT || 9000),
    hot: true,
};

const settings: UserSettings = {
    driver: 'webpack',
    build,
    devServer,
};

export default configure(
    'webpack',
    settings
);
