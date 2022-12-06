import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Login';
import NotificationsScreen from './src/components/NotificationScreen';
import Authentication from './src/service/Authentication';
import linking from './src/linking';
import UserProfile from './src/components/UserProfile';
import SubFeed from './src/components/SubFeed';
import Subreddit from './src/components/SubReddit';
import ArticleCommentsScreen from './src/components/ArticleCommentsScreen';
import {Provider} from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/redux/rootReducer';
import {watcherSaga} from './src/redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="SubFeed" component={SubFeed} />
      <Stack.Screen name="Subreddit" component={Subreddit} />
      <Stack.Screen
        name="ArticleCommentsScreen"
        component={ArticleCommentsScreen}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
