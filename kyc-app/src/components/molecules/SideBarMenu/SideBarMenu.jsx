import { useState } from "react";
import MenuItem from "../../atoms/MenuItem/MenuItem";
import { NavLink } from "react-router-dom";

function SideBarMenu({ menu, level = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren =
    Array.isArray(menu.children) && menu.children.length > 0;

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div>
      {hasChildren ? (
        <MenuItem
          icon={menu.icon}
          label={menu.label}
          hasChildren={true}
          onClick={handleToggle}
          isOpen={isOpen}
        />
      ) : (
        <NavLink
          to={menu.path}
          className={({ isActive }) =>
            `submenu-item ${
              isActive ? "submenu-item-active" : ""
            }`
          }
        >
          {menu.label}
        </NavLink>
      )}

      {isOpen && hasChildren && (
        <div
          className="sidebar-submenu flex flex-col gap-2"
          style={{ marginLeft: `${(level + 1) * 20}px` }}
        >
          {menu.children.map((child) => (
            <SideBarMenu
              key={child.id}
              menu={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SideBarMenu;