/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ReactNative, {
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  Text,
} from 'react-native';
import {initNavigation} from '@noriginmedia/react-spatial-navigation';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import DebugSection from './components/DebugSection';
import LearnMoreSection from './components/LearnMoreSection';
import ReloadSection from './components/ReloadSection';
import TitleSection from './components/TitleSection';

const StatusBar = Platform.isTV ? View : ReactNative.StatusBar;

initNavigation({
  debug: true,
  visualDebug: true,
  nativeMode: true,
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <TitleSection />
          <ReloadSection />
          <DebugSection />
          <LearnMoreSection />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
