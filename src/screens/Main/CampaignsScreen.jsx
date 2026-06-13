import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Card from '../../components/Card';
import { COLORS, FONTS, SPACING, FONT_SIZES, RADII, SHADOWS } from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MOCK_CAMPAIGNS = [
  { id: '1', title: 'Clean Water Initiative', type: 'Awareness', reach: '15,000+', status: 'Ongoing', progress: 65 },
  { id: '2', title: 'Youth Employment Drive', type: 'Registration', reach: '5,200+', status: 'Starting Soon', progress: 10 },
  { id: '3', title: 'Healthcare Camp', type: 'Event', reach: '2,500+', status: 'Completed', progress: 100 },
];

const statusColor = status => {
  if (status === 'Completed') return COLORS.success;
  if (status === 'Starting Soon') return COLORS.info;
  return COLORS.secondary;
};

const CampaignsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper headerColor={COLORS.primary}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Campaigns</Text>
        <Text style={styles.headerSubtitle}>Drive your initiatives forward</Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: insets.bottom + SPACING.xxxl * 3 }}
        showsVerticalScrollIndicator={false}
      >
        {MOCK_CAMPAIGNS.map(campaign => {
          const completed = campaign.status === 'Completed';
          const sColor = statusColor(campaign.status);
          return (
            <Card key={campaign.id} style={styles.campaignCard}>
              <View style={styles.cardHeader}>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeText}>{campaign.type}</Text>
                </View>
                <View style={[styles.statusPill, { backgroundColor: sColor + '1A' }]}>
                  <Text style={[styles.statusText, { color: sColor }]}>{campaign.status}</Text>
                </View>
              </View>

              <Text style={styles.campaignTitle}>{campaign.title}</Text>

              <View style={styles.progressRow}>
                <View style={styles.progressBarBg}>
                  <View
                    style={[
                      styles.progressBarFill,
                      { width: `${campaign.progress}%`, backgroundColor: completed ? COLORS.success : COLORS.secondary },
                    ]}
                  />
                </View>
                <Text style={styles.progressText}>{campaign.progress}%</Text>
              </View>

              <View style={styles.cardFooter}>
                <View style={styles.footerItem}>
                  <Icon name="account-multiple-outline" size={16} color={COLORS.textLight} />
                  <Text style={styles.footerText}>Reach {campaign.reach}</Text>
                </View>
                <TouchableOpacity style={styles.manageBtn} activeOpacity={0.8}>
                  <Text style={styles.manageBtnText}>Manage</Text>
                  <Icon name="arrow-right" size={15} color={COLORS.primary} />
                </TouchableOpacity>
              </View>
            </Card>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={[styles.fab, { bottom: insets.bottom + SPACING.xxxl * 2 }]}
        activeOpacity={0.85}
      >
        <Icon name="plus" size={26} color={COLORS.white} />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.gutter,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xxl,
    borderBottomLeftRadius: RADII.xl + 8,
    borderBottomRightRadius: RADII.xl + 8,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: FONT_SIZES.h2,
    fontFamily: FONTS.bold,
  },
  headerSubtitle: {
    color: COLORS.whiteAlpha70,
    fontSize: FONT_SIZES.body,
    fontFamily: FONTS.regular,
    marginTop: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.gutter,
    marginTop: SPACING.lg,
  },
  campaignCard: {
    marginBottom: SPACING.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  typeBadge: {
    backgroundColor: COLORS.surfaceAlt,
    paddingHorizontal: SPACING.md,
    paddingVertical: 5,
    borderRadius: RADII.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  typeText: {
    fontSize: FONT_SIZES.caption,
    fontFamily: FONTS.bold,
    color: COLORS.textLight,
  },
  statusPill: {
    paddingHorizontal: SPACING.md,
    paddingVertical: 5,
    borderRadius: RADII.pill,
  },
  statusText: {
    fontSize: FONT_SIZES.caption,
    fontFamily: FONTS.bold,
  },
  campaignTitle: {
    fontSize: FONT_SIZES.title,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 8,
    borderRadius: 4,
  },
  progressText: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    width: 38,
    textAlign: 'right',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
    paddingTop: SPACING.md,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  footerText: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.medium,
    color: COLORS.textLight,
  },
  manageBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    backgroundColor: COLORS.infoTint,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: RADII.pill,
  },
  manageBtnText: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.small,
  },
  fab: {
    position: 'absolute',
    right: SPACING.gutter,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.brand,
  },
});

export default CampaignsScreen;
