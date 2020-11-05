import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';

import Launch from '../screens/Launch';
import Welcome from '../screens/Auth/Welcome';

import Registration from '../screens/Auth/Registration/Registration';
import Key from '../screens/Auth/Registration/Key';

import Access from '../screens/Auth/Onboarding/Access';
import Birthdate from '../screens/Auth/Onboarding/Birthdate';
import Interest from '../screens/Auth/Onboarding/Interest';

import Login from '../screens/Auth/Login/Login';

import RestoreEmail from '../screens/Auth/Restore/RestoreEmail';
import RestoreKey from '../screens/Auth/Restore/RestoreKey';
import RestorePassword from '../screens/Auth/Restore/RestorePassword';

import LoginConfirm from '../screens/Auth/LoginConfirm';

const Stack = createStackNavigator();

function LaunchStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        ...TransitionPresets.ScaleFromCenterAndroid,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="Launch" component={Launch} options={{headerShown: false}} />
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function RegistrationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ScaleFromCenterAndroid,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
      <Stack.Screen name="Key" component={Key} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ScaleFromCenterAndroid,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="Access" component={Access} options={{headerShown: false}} />
      <Stack.Screen name="Birthdate" component={Birthdate} options={{headerShown: false}} />
      <Stack.Screen name="Interest" component={Interest} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ScaleFromCenterAndroid,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function RestoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ScaleFromCenterAndroid,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="RestoreEmail" component={RestoreEmail} options={{headerShown: false}} />
      <Stack.Screen name="RestoreKey" component={RestoreKey} options={{headerShown: false}} />
      <Stack.Screen name="RestorePassword" component={RestorePassword} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function LoginConfirmStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ScaleFromCenterAndroid,
        cardStyle: { backgroundColor: '#702DFF' },
      }}
    >
      <Stack.Screen name="LoginConfirm" component={LoginConfirm} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
  
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.ScaleFromCenterAndroid
        }}
      >
        <Stack.Screen name="LaunchStack" component={LaunchStack} options={{headerShown: false}} />
        <Stack.Screen name="RegistrationStack" component={RegistrationStack} options={{headerShown: false}} />
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} options={{headerShown: false}} />
        <Stack.Screen name="LoginStack" component={LoginStack} options={{headerShown: false}} />
        <Stack.Screen name="RestoreStack" component={RestoreStack} options={{headerShown: false}} />
        <Stack.Screen name="LoginConfirmStack" component={LoginConfirmStack} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;