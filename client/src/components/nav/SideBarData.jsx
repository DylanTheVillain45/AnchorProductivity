import JournalIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";


export const getSideBarData = (logout) => [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
    callback: () => null,
  },
  {
    title: "Journal",
    icon: <JournalIcon />,
    link: "/journal",
    callback: () => null,
  },
  {
    title: "Goals",
    icon: <FormatListBulletedIcon />,
    link: "/goals",
    callback: () => null,
  },
  {
    title: "Calendar",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
    callback: () => null,
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
    callback: () => null,
  },
  {
    title: "Admin Panel",
    icon: <AdminPanelSettingsIcon />,
    link: "/admin",
    requiresAdmin: true,
    callback: () => null,
  },
  {
    title: "Log Out",
    icon: <LogoutIcon />,
    link: "/signup",
    callback: () => logout(),
  },
];

export default getSideBarData;