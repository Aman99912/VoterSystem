import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Card from '../../components/Card';
import { COLORS, FONTS, SPACING, FONT_SIZES, RADII } from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from '../../utils/responsive';

const STATS = [
  { label: 'Total Members', value: '12,450', icon: 'account-group', tint: COLORS.indigoTint, color: COLORS.primary },
  { label: 'Active Surveys', value: '08', icon: 'clipboard-text', tint: COLORS.infoTint, color: COLORS.info },
  { label: 'Upcoming Events', value: '05', icon: 'calendar-star', tint: COLORS.secondaryTint, color: COLORS.secondary },
  { label: 'Total Donations', value: '₹2.45L', icon: 'cash-multiple', tint: COLORS.successTint, color: COLORS.success },
];

const ACTIVITIES = [
  { id: '1', title: 'New member joined', desc: 'Ravi Singh · Ward 4', time: '2m', icon: 'account-plus', tint: COLORS.indigoTint, color: COLORS.primary },
  { id: '2', title: "Survey 'Development Work' created", desc: 'You · Just now', time: '10m', icon: 'clipboard-text-outline', tint: COLORS.infoTint, color: COLORS.info },
  { id: '3', title: 'Donation received', desc: '₹500 by Suresh', time: '20m', icon: 'currency-inr', tint: COLORS.successTint, color: COLORS.success },
];

const DashboardScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper headerColor={COLORS.primary}>
      <View style={styles.header}>
        {/* decorative depth */}
        <View style={styles.blobOne} />
        <View style={styles.blobTwo} />

        <View style={styles.headerRow}>
          <View style={styles.profileSection}>
            <Image
              source={require('../../../assets/images/image.png')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.subGreeting}>Good morning 👋</Text>
              <Text style={styles.greeting}>Ankit Gill</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8}>
            <Icon name="bell-outline" size={22} color={COLORS.primary} />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: insets.bottom + SPACING.xxxl * 3 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statsGrid}>
          {STATS.map(stat => (
            <Card key={stat.label} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: stat.tint }]}>
                <Icon name={stat.icon} size={20} color={stat.color} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </Card>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {ACTIVITIES.map(item => (
          <Card key={item.id} style={styles.activityCard}>
            <View style={styles.activityRow}>
              <View style={[styles.iconBox, { backgroundColor: item.tint }]}>
                <Icon name={item.icon} size={20} color={item.color} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.activityDesc}>{item.desc}</Text>
              </View>
              <Text style={styles.activityTime}>{item.time}</Text>
            </View>
          </Card>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.gutter,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xxxl + SPACING.xl,
    borderBottomLeftRadius: RADII.xl + 8,
    borderBottomRightRadius: RADII.xl + 8,
    overflow: 'hidden',
  },
  blobOne: {
    position: 'absolute',
    top: -moderateScale(40),
    right: -moderateScale(30),
    width: moderateScale(140),
    height: moderateScale(140),
    borderRadius: moderateScale(70),
    backgroundColor: COLORS.whiteAlpha10,
  },
  blobTwo: {
    position: 'absolute',
    bottom: -moderateScale(50),
    left: -moderateScale(20),
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    backgroundColor: COLORS.whiteAlpha10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    marginRight: SPACING.md,
    borderWidth: moderateScale(2),
    borderColor: COLORS.whiteAlpha20,
  },
  iconContainer: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(14),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: moderateScale(11),
    right: moderateScale(12),
    width: moderateScale(9),
    height: moderateScale(9),
    borderRadius: moderateScale(5),
    backgroundColor: COLORS.secondary,
    borderWidth: moderateScale(1.5),
    borderColor: COLORS.white,
  },
  greeting: {
    color: COLORS.white,
    fontSize: FONT_SIZES.h3,
    fontFamily: FONTS.bold,
  },
  subGreeting: {
    color: COLORS.whiteAlpha70,
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.gutter,
    marginTop: -SPACING.xxxl,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    paddingVertical: SPACING.lg,
    marginBottom: SPACING.md,
  },
  statIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: RADII.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  statValue: {
    color: COLORS.text,
    fontSize: FONT_SIZES.h2,
    fontFamily: FONTS.bold,
  },
  statLabel: {
    color: COLORS.textLight,
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.title,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  seeAll: {
    fontSize: FONT_SIZES.body,
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
  },
  activityCard: {
    marginBottom: SPACING.md,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: RADII.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    color: COLORS.text,
    fontSize: FONT_SIZES.body,
    fontFamily: FONTS.medium,
  },
  activityDesc: {
    color: COLORS.textLight,
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
    marginTop: 2,
  },
  activityTime: {
    color: COLORS.textMuted,
    fontSize: FONT_SIZES.caption,
    fontFamily: FONTS.regular,
  },
});

export default DashboardScreen;
