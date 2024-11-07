/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AllBoats from './component/AllBoats';

const App = () => {
    return (
        <View>
            <Text style={styles.text}>
                GETABOAT - FOR SALE
            </Text>
            <AllBoats/>
        </View>
    );
};
export default App;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    backgroundColor: 'lightgray',
    fontSize: 20,
  },
});
