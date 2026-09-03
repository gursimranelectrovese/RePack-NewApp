import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MessageCircle, User } from 'lucide-react-native';
import HomeScreen from '../screens/Main/HomeScreen';
import ChatScreen from '../screens/Main/ChatScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') return <Home color={color} size={size} />;
          if (route.name === 'Chat') return <MessageCircle color={color} size={size} />;
          if (route.name === 'Profile') return <User color={color} size={size} />;
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
