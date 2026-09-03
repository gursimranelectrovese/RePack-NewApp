const { AssetRegistry } = require('react-native/src/private/assets/AssetRegistry');
module.exports = {
  registerAsset: AssetRegistry.registerAsset,
  getAssetByID: AssetRegistry.getAssetByID
};
