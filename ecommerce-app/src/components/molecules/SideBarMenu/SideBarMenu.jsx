//create SideBarMenu component from MenuItem

import { NavLink } from 'react-router-dom';
import MenuItem from '../../atoms/MenuItem/MenuItem';
function SideBarMenu({menu,isOpen,onToggle}) {
    return(
        <div className="sidebar-menu">
            <MenuItem label={menu.label} icon={menu.icon} path={menu.path}
            hasChildren={menu.hasChildren} onClick={() => onToggle(menu.id)} 
            isOpen={isOpen} />
            {isOpen && menu.children && (
                <div className="sidebar-submenu">
                    {menu.children.map((child) => (
                        <NavLink key={child.id} to={child.path} onClick={() => onToggle(child.id)}>
                            {child.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    )

}

export default SideBarMenu;