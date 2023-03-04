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
      <Button
        title="Go to secondary page"
        onPress={() => navigation.navigate('Secondary')}
      />
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
});
