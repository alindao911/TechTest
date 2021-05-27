import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//Screens
import * as screen from '../screens';

//Routes
import {NavigationService, routes} from '.';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer
      ref={(ref) => NavigationService.setTopLevelNavigator(ref)}>
      <Stack.Navigator initialRouteName={routes.POSTS_LIST_SCREEN}>
        <Stack.Screen
          name={routes.POSTS_LIST_SCREEN}
          component={screen.PostsScreen}
        />
        <Stack.Screen
          name={routes.POST_DETAILS_SCREEN}
          component={screen.PostDetailsScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'vertical',
            cardOverlayEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            gestureResponseDistance: {horizontal: 50},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
