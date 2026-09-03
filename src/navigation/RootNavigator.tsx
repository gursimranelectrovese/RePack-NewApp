import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import AuthNavigator from './AuthNavigator';

const MainNavigator = React.lazy(() => import(/* webpackChunkName: "main-navigator" */ './MainNavigator'));

function MainNavigatorWrapper() {
  return (
    <React.Suspense
      fallback={
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      }
    >
      <MainNavigator />
    </React.Suspense>
  );
}

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={MainNavigatorWrapper} />
    </Stack.Navigator>
  );
}
