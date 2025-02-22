import React from "react";
import { SettingOutlined, BellOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import useProfileMenu from "./hooks/useProfileMenu";
import NavLinks from "./components/NavLinks";
import ProfileDropdown from "./components/ProfileDropdown";
import logo from "../../../logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const { profileMenu, handleProfileMenuClick } = useProfileMenu();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <NavLinks />
      </div>

      <div className="navbar-right">
        <SettingOutlined className="icon" aria-label="Configuración" />
        <QuestionCircleOutlined className="icon" aria-label="Ayuda" />
        <BellOutlined className="icon" aria-label="Notificaciones" />
        <ProfileDropdown
          profileMenu={profileMenu}
          handleProfileMenuClick={handleProfileMenuClick}
        />
      </div>
    </div>
  );
};

export default Navbar;