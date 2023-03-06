import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MapScreen, PermissionsScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {PermissionsContext} from '../context/PermissionsContext';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const {permissions} = React.useContext(PermissionsContext);
  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        {permissions.locationStatus === 'granted' ? (
          <Stack.Screen name="Map" component={MapScreen} />
        ) : (
          <Stack.Screen name="Permissions" component={PermissionsScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
