import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme, Text } from 'react-native';

import { Colors } from '@/constants/theme';
import Header from './header';
import HomeScreen from '@/app';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <>
      <Header/>
      <HomeScreen/>
    </>
  );
}
