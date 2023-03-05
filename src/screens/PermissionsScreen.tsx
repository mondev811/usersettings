import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {PermissionsContext} from '../context/PermissionsContext';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text>PermissionsScreen</Text>

      <Button title="Permission" onPress={askLocationPermission} />
      <Text>{JSON.stringify(permissions, null, 4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
