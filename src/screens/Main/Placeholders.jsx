import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';

const PlaceholderScreen = ({ title }) => (
  <ScreenWrapper>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' }
});

export const MembersScreen = () => <PlaceholderScreen title="Members Screen" />;
export const SurveysScreen = () => <PlaceholderScreen title="Surveys Screen" />;
export const CampaignsScreen = () => <PlaceholderScreen title="Campaigns Screen" />;
export const ProfileScreen = () => <PlaceholderScreen title="Profile Screen" />;
