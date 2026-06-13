import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Card from '../../components/Card';
import { COLORS, FONTS, SPACING, FONT_SIZES, RADII } from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const STATS = [
  { label: 'Members', value: '12.4k' },
  { label: 'Surveys', value: '08' },
  { label: 'Campaigns', value: '03' },
];

const ProfileScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    const parent = navigation.getParent();
    if (parent) {
      parent.replace('Auth');
    } else {
      navigation.replace('Auth');
    }
  };

  const MenuItem = ({ icon, title, subtitle, danger = false, showArrow = true, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.iconBox, { backgroundColor: danger ? COLORS.dangerTint : COLORS.indigoTint }]}>
        <Icon name={icon} size={20} color={danger ? COLORS.danger : COLORS.primary} />
      </View>
      <View style={styles.menuTextWrap}>
        <Text style={[styles.menuTitle, danger && { color: COLORS.danger }]}>{title}</Text>
        {subtitle ? <Text style={styles.menuSubtitle}>{subtitle}</Text> : null}
      </View>
      {showArrow && <Icon name="chevron-right" size={22} color={COLORS.textMuted} />}
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper headerColor={COLORS.primary}>
      <View style={styles.header}>
        <View style={styles.blob} />
        <Image
          source={require('../../../assets/images/image.png')}
          style={styles.avatarLarge}
        />
        <Text style={styles.profileName}>Ankit Gill</Text>
        <View style={styles.roleChip}>
          <Icon name="shield-check" size={13} color={COLORS.secondary} />
          <Text style={styles.profileRole}>Administrator</Text>
        </View>
        <Text style={styles.profilePhone}>+91 00000-00000</Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: insets.bottom + SPACING.xxxl * 3 }}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.statsCard}>
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <View style={styles.statDivider} />}
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            </React.Fragment>
          ))}
        </Card>

        <Text style={styles.groupLabel}>Account</Text>
        <Card style={styles.menuCard}>
          <MenuItem icon="account-edit-outline" title="Edit Profile" subtitle="Name, photo, contact" />
          <View style={styles.divider} />
          <MenuItem icon="translate" title="Language" subtitle="English" />
          <View style={styles.divider} />
          <MenuItem icon="bell-outline" title="Notifications" subtitle="Push, email, SMS" />
          <View style={styles.divider} />
          <MenuItem icon="shield-lock-outline" title="Privacy & Security" />
        </Card>

        <Text style={styles.groupLabel}>Support</Text>
        <Card style={styles.menuCard}>
          <MenuItem icon="help-circle-outline" title="Help & Support" />
          <View style={styles.divider} />
          <MenuItem icon="information-outline" title="About App" subtitle="Version 1.0.0" />
        </Card>

        <Card style={styles.menuCard}>
          <MenuItem icon="logout" title="Logout" danger showArrow={false} onPress={handleLogout} />
        </Card>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xxxl + SPACING.lg,
    borderBottomLeftRadius: RADII.xl + 8,
    borderBottomRightRadius: RADII.xl + 8,
    alignItems: 'center',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    top: -50,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: COLORS.whiteAlpha10,
  },
  avatarLarge: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 3,
    borderColor: COLORS.whiteAlpha20,
    marginBottom: SPACING.md,
  },
  profileName: {
    color: COLORS.white,
    fontSize: FONT_SIZES.h2,
    fontFamily: FONTS.bold,
  },
  roleChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    backgroundColor: COLORS.whiteAlpha10,
    paddingHorizontal: SPACING.md,
    paddingVertical: 4,
    borderRadius: RADII.pill,
    marginTop: SPACING.sm,
  },
  profileRole: {
    color: COLORS.secondary,
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.bold,
  },
  profilePhone: {
    color: COLORS.whiteAlpha70,
    fontSize: FONT_SIZES.body,
    fontFamily: FONTS.regular,
    marginTop: SPACING.sm,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.gutter,
    marginTop: -SPACING.xxl,
  },
  statsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: COLORS.divider,
  },
  statValue: {
    fontSize: FONT_SIZES.h3,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  statLabel: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
    marginTop: 2,
  },
  groupLabel: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.bold,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: SPACING.sm,
    marginLeft: SPACING.xs,
  },
  menuCard: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: 0,
    marginBottom: SPACING.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: RADII.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  menuTextWrap: {
    flex: 1,
  },
  menuTitle: {
    fontSize: FONT_SIZES.body,
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
  menuSubtitle: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
    marginTop: 1,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginHorizontal: SPACING.lg,
  },
});

export default ProfileScreen;
