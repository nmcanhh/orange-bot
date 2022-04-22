import { AdminSidebarAssets } from "./assets.js"

export const AdminSidebar = [
    {
        title: 'プロファイル',
        smallIcon: AdminSidebarAssets.SMALL_SIDEBAR_PROFILE,
        bigIcon: AdminSidebarAssets.BIG_SIDEBAR_PROFILE,
        to: '/profile',
    },
    {
        title: '添付',
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
        title: 'シナリオの設定',
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