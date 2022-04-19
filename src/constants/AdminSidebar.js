import { AdminAssets } from "./assets.js"

export const AdminSidebar = [
    {
        title: 'Profile',
        smallIcon: AdminAssets.SMALL_SIDEBAR_PROFILE,
        bigIcon: AdminAssets.BIG_SIDEBAR_PROFILE,
        to: '/profile',
    },
    {
        title: 'Dashboard',
        smallIcon: AdminAssets.SMALL_SIDEBAR_DASHBOARD,
        bigIcon: AdminAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/dashboard',
    },
    {
        title: 'Giao diện',
        smallIcon: AdminAssets.SMALL_SIDEBAR_THEME,
        bigIcon: AdminAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/theme',
    },
    {
        title: 'Quảng cáo',
        smallIcon: AdminAssets.SMALL_SIDEBAR_ADS,
        bigIcon: AdminAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/ads',
    },
    {
        title: 'Kịch bản',
        smallIcon: AdminAssets.SMALL_SIDEBAR_SCRIPT,
        bigIcon: AdminAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/script',
    },
    {
        title: 'Thống kê',
        smallIcon: AdminAssets.SMALL_SIDEBAR_CHART,
        bigIcon: AdminAssets.BIG_SIDEBAR_DASHBOARD,
        to: '/chart',
    },
]