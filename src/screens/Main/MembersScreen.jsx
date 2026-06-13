import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../../components/ScreenWrapper';
import Card from '../../components/Card';
import { COLORS, FONTS, SPACING, FONT_SIZES, RADII, SHADOWS } from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from '../../utils/responsive';

const MOCK_MEMBERS = [
  { id: '1', name: 'Ravi Singh', phone: '+91 00000-00000', location: 'Ward 4', role: 'Volunteer', joined: '2 days ago' },
  { id: '2', name: 'Amit Kumar', phone: '+91 00000-00011', location: 'Ward 2', role: 'Member', joined: '5 days ago' },
  { id: '3', name: 'Priya Sharma', phone: '+91 00000-00012', location: 'Ward 1', role: 'Member', joined: '1 week ago' },
  { id: '4', name: 'Suresh Patel', phone: '+91 00000-00013', location: 'Ward 4', role: 'Coordinator', joined: '2 weeks ago' },
];

const FILTERS = ['All (12k)', 'Volunteers', 'Coordinators', 'Recent'];

const ROLE_STYLES = {
  Coordinator: { bg: COLORS.warningTint, fg: COLORS.warning },
  Volunteer: { bg: COLORS.successTint, fg: COLORS.success },
  Member: { bg: COLORS.indigoTint, fg: COLORS.primary },
};

const MembersScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState(0);
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper headerColor={COLORS.primary}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Members</Text>
        <Text style={styles.headerSubtitle}>Manage your constituents and team</Text>

        <View style={styles.searchContainer}>
          <Icon name="magnify" size={22} color={COLORS.textLight} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or phone…"
            placeholderTextColor={COLORS.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: insets.bottom + SPACING.xxxl * 3 }}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
          contentContainerStyle={styles.filtersContainer}
        >
          {FILTERS.map((label, index) => {
            const active = activeFilter === index;
            return (
              <TouchableOpacity
                key={label}
                style={[styles.filter, active && styles.activeFilter]}
                onPress={() => setActiveFilter(index)}
                activeOpacity={0.8}
              >
                <Text style={[styles.filterText, active && styles.activeFilterText]}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {MOCK_MEMBERS.map(member => {
          const role = ROLE_STYLES[member.role] || ROLE_STYLES.Member;
          return (
            <Card key={member.id} style={styles.memberCard}>
              <View style={styles.memberRow}>
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarText}>{member.name.charAt(0)}</Text>
                </View>
                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>{member.name}</Text>
                  <Text style={styles.memberPhone}>{member.phone}</Text>
                </View>
                <View style={[styles.roleBadge, { backgroundColor: role.bg }]}>
                  <Text style={[styles.roleText, { color: role.fg }]}>{member.role}</Text>
                </View>
              </View>
              <View style={styles.memberFooter}>
                <View style={styles.footerItem}>
                  <Icon name="map-marker-outline" size={15} color={COLORS.textLight} />
                  <Text style={styles.footerText}>{member.location}</Text>
                </View>
                <View style={styles.footerItem}>
                  <Icon name="clock-outline" size={15} color={COLORS.textLight} />
                  <Text style={styles.footerText}>{member.joined}</Text>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.85}
      >
        <Icon name="plus" size={26} color={COLORS.white} />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const SEARCH_HEIGHT = moderateScale(56);

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.gutter,
    paddingTop: SPACING.lg,
    paddingBottom: SEARCH_HEIGHT / 2 + SPACING.lg,
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
    marginBottom: SPACING.lg,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADII.lg,
    paddingHorizontal: SPACING.lg,
    height: SEARCH_HEIGHT,
    marginBottom: -(SEARCH_HEIGHT / 2),
    ...SHADOWS.medium,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: FONT_SIZES.body,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    padding: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.gutter,
    marginTop: SEARCH_HEIGHT / 2 + SPACING.sm,
  },
  filtersScroll: {
    marginHorizontal: -SPACING.gutter,
    marginBottom: SPACING.lg,
  },
  filtersContainer: {
    paddingHorizontal: SPACING.gutter,
    gap: SPACING.sm,
  },
  filter: {
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADII.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeFilter: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.textLight,
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.small,
  },
  activeFilterText: {
    color: COLORS.white,
  },
  memberCard: {
    marginBottom: SPACING.md,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  avatarPlaceholder: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    backgroundColor: COLORS.indigoTint,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  avatarText: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.subtitle,
    fontFamily: FONTS.bold,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: FONT_SIZES.body,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  memberPhone: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
    marginTop: 2,
  },
  roleBadge: {
    paddingHorizontal: SPACING.md,
    paddingVertical: moderateScale(5),
    borderRadius: RADII.pill,
  },
  roleText: {
    fontSize: FONT_SIZES.caption,
    fontFamily: FONTS.bold,
  },
  memberFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },
  fab: {
    position: 'absolute',
    bottom: moderateScale(130),
    right: SPACING.gutter,
    width: moderateScale(58),
    height: moderateScale(58),
    borderRadius: moderateScale(29),
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.brand,
  },
});

export default MembersScreen;
