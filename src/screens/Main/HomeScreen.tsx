import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Search, Star, Clock, Zap, Settings } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.name}>Alex!</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Search color="#333" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Bell color="#333" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIcon, { backgroundColor: '#E8F1FF' }]}>
              <Star color="#007AFF" size={24} />
            </View>
            <Text style={styles.actionText}>Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIcon, { backgroundColor: '#FFF0F0' }]}>
              <Clock color="#FF3B30" size={24} />
            </View>
            <Text style={styles.actionText}>Recent</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIcon, { backgroundColor: '#F0F9F0' }]}>
              <Zap color="#34C759" size={24} />
            </View>
            <Text style={styles.actionText}>Boost</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIcon, { backgroundColor: '#F4F4F4' }]}>
              <Settings color="#8E8E93" size={24} />
            </View>
            <Text style={styles.actionText}>Setup</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.activityItem}>
              <View style={styles.activityDot} />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Activity Item {item}</Text>
                <Text style={styles.activityTime}>{item} hour{item > 1 ? 's' : ''} ago</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollContent: { padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  greeting: { fontSize: 16, color: '#666', marginBottom: 4 },
  name: { fontSize: 28, fontWeight: 'bold', color: '#111' },
  headerIcons: { flexDirection: 'row', gap: 12 },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 16 },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 12,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: { fontSize: 15, fontWeight: '600', color: '#444' },
  activityList: { backgroundColor: '#FFF', borderRadius: 16, padding: 16 },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  activityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    marginRight: 16,
  },
  activityContent: { flex: 1 },
  activityTitle: { fontSize: 15, fontWeight: '500', color: '#222', marginBottom: 4 },
  activityTime: { fontSize: 13, color: '#999' },
});
