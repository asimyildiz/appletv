/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import {Colors, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

const ReloadSection = ({focused, stealFocus}) => {
  return (
    <TouchableOpacity onFocus={stealFocus}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionFocus}>
          {focused ? 'focused' : 'not-focused'}
        </Text>
        <Text style={styles.sectionTitle}>See Your Changes</Text>
        <Text style={styles.sectionDescription}>
          <ReloadInstructions />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const FocusableReloadSection = withFocusable()(ReloadSection);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionFocus: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.red,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default FocusableReloadSection;
