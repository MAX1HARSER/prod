import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoader(true));

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule, RuleSetRule) => {
        // @ts-ignore
        if (/svg/.test(rule.test as string)) {
            // @ts-ignore
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
    }));
    return config;
};
