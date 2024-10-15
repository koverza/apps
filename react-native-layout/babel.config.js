module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                ],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@interfaces': './src/interfaces',
                    '@navigation': './src/navigation',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@theme': './src/theme',
                },
            },
        ],
    ],
};
