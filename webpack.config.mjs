import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Webpack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about webpack configuration: https://webpack.js.org/configuration/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default Repack.defineWebpackConfig({
  context: __dirname,
  entry: './index.js',
  resolve: {
    ...Repack.getResolveOptions(),
    alias: {
      'react-native/Libraries/Image/AssetRegistry': path.resolve(__dirname, 'src/AssetRegistryWrapper.js'),
      '@react-native/asset-utils': '@react-native/asset-utils/src/index.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.[cm]?[jt]sx?$/,
        include: /node_modules\/lucide-react-native/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:@react-native/babel-preset'],
          },
        },
      },
      {
        test: /\.[cm]?[jt]sx?$/,
        exclude: /node_modules\/lucide-react-native/,
        type: 'javascript/auto',
        use: {
          loader: '@callstack/repack/babel-swc-loader',
          options: {},
        },
      },
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [new Repack.RepackPlugin()],
});
