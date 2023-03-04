import {Button, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = ({navigation}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name="alarm" size={20} />
        <Text>HomeScreen</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Go to permissions page"
          onPress={() => navigation.navigate('Permissions')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to map page"
          onPress={() => navigation.navigate('Map')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    marginVertical: 5,
  },
});
