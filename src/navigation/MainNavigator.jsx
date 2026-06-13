import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/theme';

import DashboardScreen from '../screens/Main/DashboardScreen';
import MembersScreen from '../screens/Main/MembersScreen';
import SurveysScreen from '../screens/Main/SurveysScreen';
import CampaignsScreen from '../screens/Main/CampaignsScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
          height: 95,
          // paddingBottom: 8,
          paddingTop: 8,
          borderRadius: 32,
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
        },
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Members" 
        component={MembersScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-group-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Surveys" 
        component={SurveysScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-text-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Campaigns" 
        component={CampaignsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bullhorn-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
