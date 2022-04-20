import { AdminSidebarAssets } from "./assets.js"

export const AdminSidebar = [
    {
        title: 'Profile',
        smallIcon: AdminSidebarAssets.SMALL_SIDEBAR_PROFILE,
        bigIcon: AdminSidebarAssets.BIG_SIDEBAR_PROFILE,
        to: '/profile',
    },
    {
        title: 'Dashboard',
        smallIcon: AdminSidebarAssets.SMALL_SIDEBAR_DASHBOARD,
        bigIcon: AdminSidebarAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/dashboard',
    },
    {
        title: 'Giao diện',
        smallIcon: AdminSidebarAssets.SMALL_SIDEBAR_THEME,
        bigIcon: AdminSidebarAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/theme',
    },
    {
        title: 'Quảng cáo',
        smallIcon: AdminSidebarAssets.SMALL_SIDEBAR_ADS,
        bigIcon: AdminSidebarAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/ads',
    },
    {
        title: 'Kịch bản',
        smallIcon: AdminSidebarAssets.SMALL_SIDEBAR_SCRIPT,
        bigIcon: AdminSidebarAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/script',
    },
    {
        title: 'Thống kê',
        smallIcon: AdminSidebarAssets.SMALL_SIDEBAR_CHART,
        bigIcon: AdminSidebarAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/chart',
    },
]