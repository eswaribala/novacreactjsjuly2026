//create SideBarMenu component from MenuItem

import { NavLink } from 'react-router-dom';
import MenuItem from '../../atoms/MenuItem/MenuItem';
function SideBarMenu({ menu, isOpen, onToggle }) {
  const hasChildren =
    Array.isArray(menu.children) && menu.children.length > 0;

  return (
    <div className="sidebar-menu">
      <MenuItem
        label={menu.label}
        icon={menu.icon}
        hasChildren={hasChildren}
        onClick={() => onToggle(menu.id)}
        isOpen={isOpen}
      />

      {isOpen && hasChildren && (
        <div className="sidebar-submenu">
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
  );
}

export default SideBarMenu;