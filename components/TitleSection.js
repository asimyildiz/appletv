/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const TitleSection = () => {
  /**
   * MainShowCase
   * @param setFocus
   * @returns JSX.Element
   */
  const TitleWidget = ({setFocus, focused, stealFocus}) => {
    useEffect(() => {
      setFocus();
    });

    return (
      <TouchableOpacity onFocus={stealFocus}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionFocus}>
            {focused ? 'focused' : 'not-focused'}
          </Text>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const FocusableTitleWidget = withFocusable()(TitleWidget);

  return <FocusableTitleWidget />;
};

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
  highlight: {
    fontWeight: '700',
  },
});

export default TitleSection;
