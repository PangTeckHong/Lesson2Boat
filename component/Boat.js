import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Icon name="ship" size={24} color="white"/>
                <Text style={styles.titleText}>
                    {name}
                </Text>
            </View>
            <Text style={styles.text}>{description}</Text>
            <Image
                source={picture}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    padding:10,
    marginTop:20,
    borderWidth: 2,
    borderColor:'black',
    backgroundColor:'lightgray',
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'dimgray',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    color: 'black',
    marginVertical: 10,
    textAlign: 'center',
    borderWidth: 1,
    fontStyle: 'normal',
  },
});



export default Boat;

