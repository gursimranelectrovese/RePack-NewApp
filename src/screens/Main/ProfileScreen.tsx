import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, ChevronRight, User, Bell, Shield, CircleHelp, LogOut } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';


type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

const OtaFeature = React.lazy(() => import(/* webpackChunkName: "ota-feature" */ '../../components/OtaFeature'));


export default function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleLogout = () => {
    navigation.replace('Auth');
  };

  const SETTINGS_OPTIONS = [
    { id: '1', title: 'Account Settings', icon: <User color="#333" size={22} /> },
    { id: '2', title: 'Notifications', icon: <Bell color="#333" size={22} /> },
    { id: '3', title: 'Privacy & Security', icon: <Shield color="#333" size={22} /> },
    { id: '4', title: 'Help & Support', icon: <CircleHelp color="#333" size={22} /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>A</Text>
            <TouchableOpacity style={styles.editBadge}>
              <Settings color="#FFF" size={14} />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Alex Developer</Text>
          <Text style={styles.email}>alex@example.com</Text>

          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeText}>Upgrade to PRO</Text>
          </TouchableOpacity>
        </View>

        {/* Settings List */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.settingsCard}>
            {SETTINGS_OPTIONS.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.settingRow,
                  index === SETTINGS_OPTIONS.length - 1 && styles.settingRowLast
                ]}
              >
                <View style={styles.settingIcon}>{item.icon}</View>
                <Text style={styles.settingTitle}>{item.title}</Text>
                <ChevronRight color="#C7C7CC" size={20} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* OTA Feature Chunk */}
        <OtaFeature />

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut color="#FF3B30" size={20} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollContent: { padding: 20 },
  header: { alignItems: 'center', marginTop: 20, marginBottom: 40 },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  avatarText: { fontSize: 40, fontWeight: 'bold', color: '#FFF' },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#333',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FAFAFA',
  },
  name: { fontSize: 24, fontWeight: 'bold', color: '#111', marginBottom: 4 },
  email: { fontSize: 15, color: '#8E8E93', marginBottom: 24 },
  upgradeButton: {
    backgroundColor: '#111',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  upgradeText: { color: '#FFF', fontWeight: '600', fontSize: 15 },
  settingsSection: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 16, paddingHorizontal: 4 },
  settingsCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingRowLast: { borderBottomWidth: 0 },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingTitle: { flex: 1, fontSize: 16, color: '#222', fontWeight: '500' },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFF0F0',
    borderRadius: 16,
    marginBottom: 40,
  },
  logoutText: { color: '#FF3B30', fontSize: 16, fontWeight: '600', marginLeft: 8 },
});
