import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Card from '../../components/Card';
import { COLORS, FONTS, SPACING, FONT_SIZES, RADII, SHADOWS } from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MOCK_SURVEYS = [
  { id: '1', title: 'Development Work Feedback', date: '10 Jun 2026', status: 'Active', responses: 450, target: 1000 },
  { id: '2', title: 'Pre-election Pulse Check', date: '05 Jun 2026', status: 'Active', responses: 1200, target: 1500 },
  { id: '3', title: 'Water Supply Issues', date: '20 May 2026', status: 'Closed', responses: 850, target: 850 },
];

const SurveysScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper headerColor={COLORS.primary}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Surveys & Polls</Text>
        <Text style={styles.headerSubtitle}>Gather insights from the ground</Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: insets.bottom + SPACING.xxxl * 3 }}
        showsVerticalScrollIndicator={false}
      >
        {MOCK_SURVEYS.map(survey => {
          const closed = survey.status === 'Closed';
          const pct = Math.min(100, Math.round((survey.responses / survey.target) * 100));
          return (
            <Card key={survey.id} style={styles.surveyCard}>
              <View style={styles.surveyHeader}>
                <View style={[styles.statusBadge, closed && styles.statusBadgeClosed]}>
                  <View style={[styles.statusDot, closed && styles.statusDotClosed]} />
                  <Text style={[styles.statusText, closed && styles.statusTextClosed]}>{survey.status}</Text>
                </View>
                <Text style={styles.surveyDate}>{survey.date}</Text>
              </View>

              <Text style={styles.surveyTitle}>{survey.title}</Text>

              <View style={styles.progressRow}>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: `${pct}%` }, closed && { backgroundColor: COLORS.textMuted }]} />
                </View>
                <Text style={styles.progressLabel}>{pct}%</Text>
              </View>

              <View style={styles.footer}>
                <View style={styles.statBox}>
                  <Icon name="account-group" size={18} color={COLORS.primary} />
                  <Text style={styles.statNumber}>{survey.responses.toLocaleString('en-IN')}</Text>
                  <Text style={styles.statLabel}>responses</Text>
                </View>
                <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
                  <Text style={styles.actionBtnText}>View Report</Text>
                  <Icon name="arrow-right" size={16} color={COLORS.primary} />
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
  surveyCard: {
    marginBottom: SPACING.md,
  },
  surveyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.successTint,
    paddingHorizontal: SPACING.md,
    paddingVertical: 5,
    borderRadius: RADII.pill,
  },
  statusBadgeClosed: {
    backgroundColor: COLORS.divider,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.success,
    marginRight: SPACING.xs,
  },
  statusDotClosed: {
    backgroundColor: COLORS.textMuted,
  },
  statusText: {
    fontSize: FONT_SIZES.caption,
    fontFamily: FONTS.bold,
    color: COLORS.success,
  },
  statusTextClosed: {
    color: COLORS.textLight,
  },
  surveyDate: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },
  surveyTitle: {
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
    backgroundColor: COLORS.secondary,
    borderRadius: 4,
  },
  progressLabel: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    width: 38,
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
    paddingTop: SPACING.md,
  },
  statBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  statNumber: {
    fontSize: FONT_SIZES.subtitle,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  statLabel: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    backgroundColor: COLORS.infoTint,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: RADII.pill,
  },
  actionBtnText: {
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

export default SurveysScreen;
