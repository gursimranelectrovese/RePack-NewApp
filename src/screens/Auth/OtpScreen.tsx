import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type AuthStackParamList = {
  Login: undefined;
  Otp: { phoneNumber: string };
};

type OtpScreenRouteProp = RouteProp<AuthStackParamList, 'Otp'>;

export default function OtpScreen() {
  const navigation = useNavigation();
  const route = useRoute<OtpScreenRouteProp>();
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Navigate to Main flow
    // @ts-ignore - root navigation reset
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Enter the code sent to {phoneNumber}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify & Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 30, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 15, fontSize: 20, marginBottom: 20, textAlign: 'center', letterSpacing: 5 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
