$folders = @(
    "src\screens\auth",
    "src\screens\employee",
    "src\screens\manager",
    "src\screens\owner",
    "src\navigation"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Force -Path $folder
    }
}

$screens = @(
    @{ Path = "src\screens\auth\SplashScreen.jsx"; Name = "SplashScreen" },
    @{ Path = "src\screens\auth\LoginScreen.jsx"; Name = "LoginScreen" },
    
    @{ Path = "src\screens\employee\EmployeeDashboard.jsx"; Name = "EmployeeDashboard" },
    @{ Path = "src\screens\employee\ClockInScreen.jsx"; Name = "ClockInScreen" },
    @{ Path = "src\screens\employee\AttendanceHistoryScreen.jsx"; Name = "AttendanceHistoryScreen" },
    @{ Path = "src\screens\employee\LeaveRequestScreen.jsx"; Name = "LeaveRequestScreen" },
    @{ Path = "src\screens\employee\ProfileScreen.jsx"; Name = "ProfileScreen" },
    
    @{ Path = "src\screens\manager\ManagerDashboard.jsx"; Name = "ManagerDashboard" },
    @{ Path = "src\screens\manager\TeamAttendanceScreen.jsx"; Name = "TeamAttendanceScreen" },
    @{ Path = "src\screens\manager\EmployeeProfileScreen.jsx"; Name = "EmployeeProfileScreen" },
    @{ Path = "src\screens\manager\LeaveApprovalScreen.jsx"; Name = "LeaveApprovalScreen" },
    
    @{ Path = "src\screens\owner\OwnerDashboard.jsx"; Name = "OwnerDashboard" },
    @{ Path = "src\screens\owner\EmployeeListScreen.jsx"; Name = "EmployeeListScreen" },
    @{ Path = "src\screens\owner\CreateEmployeeScreen.jsx"; Name = "CreateEmployeeScreen" },
    @{ Path = "src\screens\owner\CompanySettingsScreen.jsx"; Name = "CompanySettingsScreen" }
)

foreach ($screen in $screens) {
    $content = @"
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CText from '../../Ui/CText';

const $($screen.Name) = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CText variant="bold" size={24}>$($screen.Name)</CText>
        <CText variant="regular" size={14} style={{ marginTop: 8 }}>
          Placeholder for $($screen.Name)
        </CText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default $($screen.Name);
"@
    Set-Content -Path $screen.Path -Value $content
}
