import JournalIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Journal",
    icon: <JournalIcon />,
    link: "/journal",
  },
  {
    title: "Goals",
    icon: <FormatListBulletedIcon />,
    link: "/goals",
  },
  {
    title: "Calendar",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
  },
];

export default SidebarData