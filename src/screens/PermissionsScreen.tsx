import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {PermissionsContext} from '../context/PermissionsContext';
import StyledButton from '../components/StyledButton';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        This application needs permissions to use the device's GPS
      </Text>
      <StyledButton title="Set Permissions" onPress={askLocationPermission} />
      <Text style={styles.secondaryText}>
        {JSON.stringify(permissions, null, 4)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  secondaryText: {
    marginTop: 20,
  },
});
