import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale } from '../utils/responsive';

import DashboardScreen from '../screens/Main/DashboardScreen';
import MembersScreen from '../screens/Main/MembersScreen';
import SurveysScreen from '../screens/Main/SurveysScreen';
import CampaignsScreen from '../screens/Main/CampaignsScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          marginHorizontal: moderateScale(20),
          // elevation: 
          // shadowColor: '#000',
          // shadowOffset: { width: 0, height: moderateScale(10) },
          // shadowOpacity: 0.1,
          // shadowRadius: moderateScale(20),
          height: moderateScale(70),
          paddingBottom: moderateScale(10),
          paddingTop: moderateScale(8),
          borderRadius: moderateScale(32),
          position: 'absolute',
          bottom: insets.bottom + moderateScale(16),
          left: moderateScale(16),
          right: moderateScale(16),
        },
        tabBarItemStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // paddingVertical: 0,
          // marginVertical: 0,
        },
        tabBarIconStyle: {
          marginTop: 0,
          marginBottom: moderateScale(2),
        },
        tabBarLabelStyle: {
          fontSize: moderateScale(11),
          fontWeight: '600',
          marginTop: 0,
          marginBottom: 0,
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
