import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OtaFeature = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTA Gursimran 3.0 🌟 (IT WORKS!)</Text>
      <Text style={styles.description}>
        This component was loaded asynchronously as a separate chunk!
        In production, you can replace this chunk on your server and the app will download the updated version over the air.
      </Text>

      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: 'http://10.0.2.2:8080/drawable-mdpi/src_assets_images_1.jpg' }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 12,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#00acc1',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006064',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#00838f',
    textAlign: 'center',
  },
});

export default OtaFeature;
