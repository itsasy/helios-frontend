import { Menu } from "antd";
import { useState } from "react";

const useProfileMenu = () => {
    const [profileMenuVisible, setProfileMenuVisible] = useState(false);

    const handleProfileMenuClick = () => {
        setProfileMenuVisible(!profileMenuVisible);
    };

    const profileMenu = (
        <Menu>
            <Menu.Item key="1">Perfil</Menu.Item>
            <Menu.Item key="2">Cerrar sesión</Menu.Item>
        </Menu>
    );

    return { profileMenuVisible, profileMenu, handleProfileMenuClick };
};

export default useProfileMenu;