/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import { ScriptManager, Script } from '@callstack/repack/client';
import App from './App';
import { name as appName } from './app.json';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let resolveURL;
  if (__DEV__) {
    resolveURL = Script.getDevServerURL(scriptId);
  } else {
    // For the Android emulator, 10.0.2.2 maps to the host machine's localhost.
    // We pass excludeExtension: true because we provide the full filename ourselves.
    // Without it, Re.Pack's runtime appends .chunk.bundle automatically, causing a double extension.
    resolveURL = Script.getRemoteURL(
      `http://10.0.2.2:8080/${scriptId}.chunk.bundle`,
      { excludeExtension: true }
    );
  }

  return {
    url: resolveURL,
    cache: false, // Set to true in production to cache downloaded chunks
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
