import React from "react";
import { Dropdown, Avatar, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../Navbar.css";

const ProfileDropdown = ({ profileMenu, handleProfileMenuClick }) => {
    return (
        <Dropdown overlay={profileMenu} trigger={["click"]}>
            <div className="profile" onClick={handleProfileMenuClick}>
                <Avatar src="https://i.pravatar.cc/300" className="avatar" />
                <span className="username">Administrador</span>
                <DownOutlined className="dropdown-arrow" />
            </div>
        </Dropdown>
    );
};

export default ProfileDropdown;