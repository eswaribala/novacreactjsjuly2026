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
                onClick={() => onToggle(menu.id)}
                isOpen={isOpen}
            >
            </MenuItem>
            {isOpen && hasChildren && (
                <div className="ml-8">
                    {menu.children.map((child) => (
                        <NavLink
                            key={child.id}
                            to={child.path}
                            className={({ isActive }) =>
                                `submenu-item ${
                                isActive ? "submenu-item-active" : ""
                                }`
                            }
                            >
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