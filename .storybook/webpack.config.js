module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
// const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
 
// module.exports = async ({ config }) => {
//   config.module.rules.push({
//     test: /\.(stories|story)\.mdx$/,
//     use: [
//       {
//         loader: require.resolve("babel-loader"),
//         options: {
//           presets: [require.resolve("babel-preset-react-app")]
//         }
//       },
//       require.resolve("react-docgen-typescript-loader"),
//       {
//         loader: '@mdx-js/loader',
//         options: {
//           compilers: [createCompiler({})],
//         },
//       },
//     ],
//   });
//   config.module.rules.push({
//     test: /\.(stories|story)\.[tj]sx?$/,
//     loader: require.resolve('@storybook/source-loader'),
//     exclude: [/node_modules/],
//     enforce: 'pre',
//   });
//   return config;
// };
