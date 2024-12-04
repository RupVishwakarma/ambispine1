import { useEffect, useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { useSidebarContext } from '../../layouts/global/sidebarContext';
import { tokens } from '../../theme';
import profileImage from '../../assets/user.png';
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import {
  HomeOutlined as HomeOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  ContactsOutlined as ContactsOutlinedIcon,
  ReceiptOutlined as ReceiptOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  BarChartOutlined as BarChartOutlinedIcon,
  PieChartOutlineOutlined as PieChartOutlineOutlinedIcon,
  TimelineOutlined as TimelineOutlinedIcon,
  CloseOutlined as CloseOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  MapOutlined as MapOutlinedIcon,
  SwitchRightOutlined as SwitchRightOutlinedIcon,
  SwitchLeftOutlined as SwitchLeftOutlinedIcon
} from "@mui/icons-material";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"; 
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  const location = useLocation(); 
  
  const user = JSON.parse(localStorage.getItem("user")) || {};
  
  // Set selected based on the current path
  useEffect(() => {
    const path = location.pathname.split('/')[1]; 
    setSelected(path.charAt(0).toUpperCase() + path.slice(1)); 
  }, [location]);

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        zIndex: 10000,
        "& .sidebar": { border: "none" },
        "& .menu-icon": { backgroundColor: "transparent !important" },
        "& .menu-item": { backgroundColor: "transparent !important" },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={collapseSidebar} />
              ) : sidebarRTL ? (
                <SwitchLeftOutlinedIcon onClick={() => setSidebarRTL(!sidebarRTL)} />
              ) : (
                <SwitchRightOutlinedIcon onClick={() => setSidebarRTL(!sidebarRTL)} />
              )
            }
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!collapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  {user?.role}
                </Typography>
                <IconButton onClick={broken ? toggleSidebar : collapseSidebar}>
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          
          {!collapsed && (
            <Box mb="25px" textAlign="center">
              <img
                alt="profile user"
                width="100px"
                height="100px"
                src={user?.profileImage || profileImage} // Use dynamic profile image
                style={{ cursor: "pointer", borderRadius: "50%", backgroundColor: colors.primary[500] }}
              />
              <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                {user?.fullName}
              </Typography>
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 20px 5px 20px" }}>
              Data
            </Typography>
            <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="User Information" to="/contacts" icon={<AccountCircleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Employee Information" to="/emp-view" icon={<AccountCircleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="View Feedback" to="/feedback-view" icon={<FeedbackOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Job View" to="/job-view" icon={<WorkOutlineIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 20px 5px 20px" }}>
              Pages
            </Typography>
            <Item title="Team Form" to="/team-form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Create Employee" to="/emp-form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Job Form" to="/job-form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Invoice Form" to="/invoice-form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="FAQ Page" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 20px 5px 20px" }}>
              Charts
            </Typography>
            <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
