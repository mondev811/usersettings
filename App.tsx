import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PermissionsProvider} from './src/context/PermissionsContext';
import {RootNavigator} from './src/navigation/RootNavigator';

const AppState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppState>
        <RootNavigator />
      </AppState>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
