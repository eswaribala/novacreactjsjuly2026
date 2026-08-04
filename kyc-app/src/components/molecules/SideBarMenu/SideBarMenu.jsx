import MenuItem from '../../atoms/MenuItem/MenuItem';
import { NavLink } from 'react-router-dom';

function SideBarMenu({menu,isOpen,onToggle}){
    const hasChildren = Array.isArray(menu.children) && menu.children.length > 0;

    return(
        <>
        <div>
            <MenuItem
                icon={menu.icon}
                label={menu.label}
                path={menu.path}
                hasChildren={hasChildren}
                onClick={onToggle}
                isOpen={isOpen}
            >
            </MenuItem>
            {isOpen && hasChildren && (
                <div className="ml-4">
                    {menu.children.map((child) => (
                        <NavLink to={child.path} end={child.path === "/"} className={({ isActive }) => `menu-item menu-link ${isActive ? "menu-item-active" : ""}`}>
                            {child.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
        
        </>
    )
}

export default SideBarMenu;