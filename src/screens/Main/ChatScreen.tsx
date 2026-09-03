import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Edit } from 'lucide-react-native';

const CHATS = [
  { id: '1', name: 'Alice Smith', message: 'Hey! Are we still on for tomorrow?', time: '10:30 AM', unread: 2 },
  { id: '2', name: 'Bob Johnson', message: 'Thanks for the update.', time: 'Yesterday', unread: 0 },
  { id: '3', name: 'Design Team', message: 'I have attached the new assets.', time: 'Monday', unread: 5 },
  { id: '4', name: 'Mom', message: 'Call me when you are free.', time: 'Monday', unread: 0 },
];

export default function ChatScreen() {
  const renderItem = ({ item }: { item: typeof CHATS[0] }) => (
    <TouchableOpacity style={styles.chatRow}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName} numberOfLines={1}>{item.name}</Text>
          <Text style={[styles.chatTime, item.unread > 0 && styles.chatTimeUnread]}>{item.time}</Text>
        </View>
        <View style={styles.chatFooter}>
          <Text style={styles.chatMessage} numberOfLines={2}>{item.message}</Text>
          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Search color="#333" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Edit color="#333" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={CHATS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#111' },
  headerIcons: { flexDirection: 'row', gap: 12 },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: { paddingHorizontal: 20 },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: { fontSize: 20, fontWeight: '600', color: '#FFF' },
  chatContent: { flex: 1 },
  chatHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  chatName: { fontSize: 16, fontWeight: '600', color: '#111', flex: 1, marginRight: 8 },
  chatTime: { fontSize: 13, color: '#8E8E93' },
  chatTimeUnread: { color: '#007AFF', fontWeight: '500' },
  chatFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  chatMessage: { fontSize: 14, color: '#666', flex: 1, marginRight: 16 },
  unreadBadge: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadText: { fontSize: 12, color: '#FFF', fontWeight: '600' },
});
