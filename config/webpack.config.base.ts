import path from 'path';
import webpack from 'webpack';
import type {FinalizableWebpackConfiguration, BabelCommandLineArgs} from '@reskript/settings';

const resolve = (dir: string): string => path.resolve(__dirname, '../', dir);

const alias = {
    '@': resolve('src'),
    '@commonComponents': resolve('src/components/Common'),
};

const extendsPlugins = [
    new webpack.DefinePlugin({
        'process.env.BASE_NAME': JSON.stringify(process.env.BASE_NAME),
        'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
    }),
];

const finalizeBuild = (webpackConfig: FinalizableWebpackConfiguration) => {
    webpackConfig.resolve.alias = alias;

    webpackConfig.plugins = [...webpackConfig.plugins, ...extendsPlugins];

    return webpackConfig;
};

const finalizeBabel = (babelConfig: BabelCommandLineArgs) => {
    return babelConfig;
};

export {
    finalizeBuild,
    finalizeBabel,
};
