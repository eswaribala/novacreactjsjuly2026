//create SideBarMenu component from MenuItem

import MenuItem from '../atoms/MenuItem/MenuItem';
function SideBarMenu({menu,isOpen,onToggle}) {
    return(
        <div className="sidebar-menu">
            <MenuItem label={menu.label} icon={menu.icon} path={menu.path}
            hasChildren={menu.hasChildren} onClick={() => onToggle(menu.id)} 
            isOpen={isOpen} />
            {isOpen && menu.children && (
                <div className="sidebar-submenu">
                    {menu.children.map((child) => (
                        <MenuItem key={child.id} label={child.label} icon={child.icon} path={child.path}
                        hasChildren={child.hasChildren} onClick={() => onToggle(child.id)} 
                        isOpen={isOpen} />
                    ))}
                </div>
            )}
        </div>
    )

}

export default SideBarMenu;